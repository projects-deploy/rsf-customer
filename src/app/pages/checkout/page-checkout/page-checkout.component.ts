import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit {

  checkout: any = this.cartService.cart();

  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || undefined;
  // customer!: Customer;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  createOrder() {

    let order: Order = {
      date_order: new Date(Date.now()),
      value_total: 321,
      shipping: 1,
      to_remove: 1,
      comments: '',
      status: 1,
      customer: this.customer,
      itemsOrder: this.checkout
    }

    console.log('CHECKOUT:', order)
  }
}
