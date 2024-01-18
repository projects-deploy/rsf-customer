import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cupom } from 'src/app/models/Cupom';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { CupomService } from 'src/app/services/cupom/cupom.service';
import { OrdersService } from 'src/app/services/ordres/orders.service';
import { FreteService } from 'src/app/shared/services/calculaFrete/freteService.service';
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
  errorApplyCoupon: boolean = false;
  errorApplyCouponMsg: String = '';
  lastCoupon: string = '';
  loading: boolean = false;
  shipping: string = '';

  totalAmount = computed(() => {
    return this.itemList().reduce((acc: any, curr: any) => acc + curr.amount, 0);
  });

  finaly_valuet = computed(() => {
    return this.cupom() + this.totalAmount() + this.s_delivery();
  });

  flat: number = 10;

  payment: string = '';
  select_payment: string = '';

  formCupom: FormGroup;
  commentsForm!: FormGroup;

  checkForm: boolean = false;
  blockApplyBtn: boolean = true;
  checkPayment: boolean = false;
  checkDelivery: boolean = false;

  localidade: string = '';
  freteCalculado: number | null = 0;

  delivery: any[] = [];

  cepForm!: FormGroup

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

  arrCupons: Cupom[] = [];

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private rxjs: DataRxjsService,
    private cupomService: CupomService,
    private orderService: OrdersService,
    private freteService: FreteService,
  ) { }

  ngOnInit(): void {
    this.formCupom = this.fb.group({
      discount: ['', [Validators.required]]
    });

    this.commentsForm = this.fb.group({
      comments: ['']
    });

    this.cepForm = this.fb.group({
      cep: ['']
    });

    this.rxjs.checkoutValid$.subscribe(value => {
      console.log('rxjs form', value);
      this.checkForm = value;
    });
  }

  createOrder() {

    let order: Order = {
      date_order: new Date(Date.now()),
      value_total: +this.finaly_valuet().toFixed(2),
      shipping: this.shipping,
      payment: this.select_payment,
      comments: this.commentsForm.value.comments,
      status: 1,
      customer: this.customer,
      items: this.checkout
    }
    this.loading = true;
    this.sendOrderApi(order);
  }

  sendOrderApi(order: Order) {
    this.orderService.createOrder(order, this.lastCoupon).subscribe({
      next: (data) => {
        console.log('CREATE ORDER SUCCESS:', data);
        localStorage.removeItem('rsf-cart');
        this.rxjs.crtlItemCardQuantity({
          qtde_items: 0
        });
        setTimeout(() => {
          this.route.navigate(['/receipt'], { queryParams: { receipt: data.receipt_number } });
          this.loading = false;
        }, 5000);
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
    this.shipping = value.value;

    this.delivery.forEach(option => {
      if (option.id === value.id) {
        option.selected = true;
        this.s_delivery.set(option.price);
      } else {
        option.selected = false;
      }
    });
  }

  resetBeforeCheckoutSucess() {
    this.checkPayment = false;
    this.checkDelivery = false;
  }

  paymentMode(value: string) {
    let vlr = (value === 'pix') ? 10 : 0;
    this.select_payment = value;
    // this.discountCalculate(vlr);
    this.checkPayment = true;
  }

  discountCalculate(cupom: Cupom) {
    let value: number = 0;

    this.cupom.update((currentArray) => {
      if (cupom.discountType == 'percent') {
        value = -((this.finaly_valuet() * cupom.discount) / 100);
      }
      else if (cupom.discountType == 'money') {
        value = (-cupom.discount);
      }
      return currentArray += (value);
    });
  }

  returnValue(value: number) {
    this.cupom.update((currentArray) => {
      return currentArray += value;
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
    } else {
      this.discountCalculate(this.arrCupons[idx]);
      this.lastCoupon = this.arrCupons[idx].code;
      this.blockForm();
    }
  }

  applyCoupon(code: string) {
    let customer = String(this.customer.id);
    this.errorApplyCoupon = false;
    this.cupomService.apllyCupom(code, customer).subscribe({
      next: (data) => {
        this.discountCalculate(data);
        this.blockForm();
        this.lastCoupon = data.code;
        this.arrCupons.push({ ...data });
        // console.log('APPLY CUPOM SUCCESS:', this.arrCupons);
      },
      error: (err) => {
        console.log('APPLY CUPOM ERROR:', err.error.message);
        this.errorApplyCoupon = true;
        this.errorApplyCouponMsg = err.error.message;
      }
    });
  }

  removeCupom(code: string) {
    this.blockApplyBtn = true;
    this.formCupom.controls['discount'].enable();
    this.formCupom.patchValue({
      discount: ''
    });
    this.lastCoupon = '';

    let idx = this.filterCupom(code);

    if (idx !== -1) {
      this.returnValue(this.arrCupons[idx].discount);
    }
  }

  calcularFrete(cep: string) {
    this.s_delivery.set(0);
    this.freteService.getAddress(cep).subscribe({
      next: (data) => {
        this.delivery = this.freteService.calcularFrete(data.uf);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
}