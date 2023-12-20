import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent implements OnInit {

  checkout: any = this.cartService.cart().items;

  customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || null;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log('checkout', this.checkout);
  }
}
