import { Component, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/ordres/orders.service';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit {

  checkout: any = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || [];
  itemList = signal(this.checkout);

  radioPayment = [
    {
      value: 'pix',
      icon: 'ri-currency-line'
    },
    {
      value: 'ticket',
      icon: 'ri-coupon-3-line'
    },
    {
      value: 'pix',
      icon: 'ri-bank-card-line'
    }
  ]

  tax: number = 0;
  free: number = 0
  flat: number = 10;
  cupom: number = 0;
  // finaly_value: number = 0;

  totalAmount = computed(() => {
    return this.itemList().reduce((acc: any, curr: any) => acc + curr.amount, 0);
  });

  finaly_valuet = computed(() => {
    return this.tax + this.free + this.flat + this.totalAmount();
  });

  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || undefined;
  
  payment: string = '';
  constructor(
    private route: Router,
    private rxjs: DataRxjsService,
    private orderService: OrdersService,
  ) { }

  ngOnInit(): void {
    console.log('CHECKOUT INIT', this.checkout);
  }

  createOrder() {

    let order: Order = {
      date_order: new Date(Date.now()),
      value_total: this.finaly_valuet(),
      shipping: 1,
      to_remove: 1,
      comments: '',
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
      },
      error: (err) => {
        console.log('CREATE ORDER ERROR:', err);
      }
    });
  }
}
