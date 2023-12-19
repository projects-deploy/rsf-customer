import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {

  cart = this.cartService.cart().items;
  totalAmount = this.cartService.cart().totalAmount;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  removeItem(productId: number) {
    this.cartService.removeItem(String(productId));
  }
}
