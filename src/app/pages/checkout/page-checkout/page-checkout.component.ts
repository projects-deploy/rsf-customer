import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { CupomService } from 'src/app/services/cupom/cupom.service';
import { OrdersService } from 'src/app/services/ordres/orders.service';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit {

  checkout: any = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || [];
  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || undefined;

  cupom = signal(0);
  s_delivery = signal(0);
  itemList = signal(this.checkout);

  totalAmount = computed(() => {
    return this.itemList().reduce((acc: any, curr: any) => acc + curr.amount, 0);
  });

  finaly_valuet = computed(() => {
    return this.cupom() + this.totalAmount() + this.s_delivery();
  });

  flat: number = 10;

  payment: string = '';
  select_payment: string = '';
  select_delivery: string = '';

  formCupom: FormGroup;
  commentsForm!: FormGroup;

  blockApplyBtn: boolean = true;
  checkPayment: boolean = false;
  checkDelivery: boolean = false;

  delivery: any[] = [
    {
      id: 1,
      name: 'Grátis',
      value: 'free',
      price: 0.00,
    },
    {
      id: 2,
      name: 'Correios',
      value: 'flat',
      price: 10.00
    }
  ];

  radioPayment = [
    {
      value: 'pix',
      icon: 'ri-currency-line',
      check: false
    },
    {
      value: 'ticket',
      icon: 'ri-coupon-3-line',
      check: false
    },
    {
      value: 'card',
      icon: 'ri-bank-card-line',
      check: false
    }
  ];

  arrCupons: selectCupons[] = [];

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private rxjs: DataRxjsService,
    private cupomService: CupomService,
    private orderService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.formCupom = this.fb.group({
      discount: ['', [Validators.required]]
    });

    this.commentsForm = this.fb.group({
      comments: ['']
    });
  }

  createOrder() {

    let order: Order = {
      date_order: new Date(Date.now()),
      value_total: +this.finaly_valuet().toFixed(2),
      shipping: this.select_delivery,
      payment: this.select_delivery,
      comments: this.commentsForm.value.comments,
      status: 1,
      customer: this.customer,
      items: this.checkout
    }

    console.log('CHECKOUT:', order);
    this.sendOrderApi(order);
  }

  sendOrderApi(order: Order) {
    this.orderService.createOrder(order).subscribe({
      next: (data) => {
        console.log('CREATE ORDER SUCCESS:', data);
        localStorage.removeItem('rsf-cart');
        this.rxjs.crtlItemCardQuantity({
          qtde_items: 0
        });
        this.route.navigate(['/']);
        this.resetBeforeCheckoutSucess();
      },
      error: (err) => {
        console.log('CREATE ORDER ERROR:', err);
      }
    });
  }

  deliveryMode(value: any) {
    this.checkDelivery = true;
    this.select_payment = value.value;
    this.s_delivery.set(value.price);
  }

  resetBeforeCheckoutSucess() {
    this.checkPayment = false;
    this.checkDelivery = false;
  }

  paymentMode(value: string) {
    let vlr = (value === 'pix') ? 10 : 0;
    this.select_payment = value;
    this.discountCalculate(vlr);
    this.checkPayment = true;
  }

  discountCalculate(value: number) {
    this.cupom.update((currentArray) => {
      return currentArray += (-value);
    });
    // this.calculateValue();
  }

  returnValue(value: number) {
    this.cupom.update((currentArray) => {
      return currentArray -= value;
    });
  }

  calculateValue() {
    this.finaly_valuet = computed(() => {
      return this.cupom() + this.totalAmount() + this.s_delivery();
    });
  }

  blockForm() {
    this.blockApplyBtn = false;
    this.formCupom.controls['discount'].disable();
  }

  filterCupom(code: string) {
    return this.arrCupons.findIndex((cpm: any) => cpm.code === code);
  }

  checkCupon(code: string) {
    let idx = this.filterCupom(code);
    if (idx === -1) {
      this.applyCoupon(code);
      return;
    }
    this.discountCalculate(this.arrCupons[idx].discount);
    this.blockForm();
  }

  applyCoupon(code: string) {
    this.cupomService.apllyCupom(code).subscribe({
      next: (data) => {
        this.discountCalculate(data.discount);
        this.blockForm();
        this.arrCupons.push({
          code: code,
          discount: data.discount
        });
        console.log('APPLY CUPOM SUCCESS:', this.arrCupons);
      },
      error: (err) => {
        console.log('APPLY CUPOM ERROR:', err);
      }
    });
  }

  removeCupom(code: string) {
    console.log('VALUE REMOVE CUPOM', code);

    this.blockApplyBtn = true;
    this.formCupom.controls['discount'].enable();
    this.formCupom.patchValue({
      discount: ''
    });

    let idx = this.filterCupom(code);

    if (idx !== -1) {
      this.returnValue(this.arrCupons[idx].discount);
    }
  }
}
interface selectCupons {
  code: string;
  discount: number;
}