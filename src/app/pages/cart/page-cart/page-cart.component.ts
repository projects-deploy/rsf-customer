import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {

  cart = this.cartService.cart().items;
  totalAmount = this.cartService.cart().totalAmount;

  constructor(
    private rxjs: DataRxjsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.rxjs.cartItemsQuantity$.subscribe(value => {
      console.log('ITEM UPDATE COMPONENT:', value);
      this.totalAmount = value.amount;
    });
  }

  removeItem(productId: number) {
    this.cartService.removeItem(String(productId));
  }

  addProduct(i: number, sum: boolean = false) {
    let p = this.cartService.cart().items[i];
    sum ? p.quantity++ : p.quantity--;
    this.cartService.updateItem(i, p, sum);
  }
}
