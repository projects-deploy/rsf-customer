import { Component, OnInit, computed, signal } from '@angular/core';
import { CartItem } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {

  cart = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || [];
  itemList = signal(this.cart);

  totalAmount = computed(() => {
    return this.itemList().reduce((acc: number, curr: any) => acc + (curr.product.price_promo * curr.qtde_item), 0);
  });

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  removeItem(item: any, idx: number) {
    this.itemList.set(this.itemList().filter((i: CartItem) => i !== item));
    this.cartService.removeItem(idx);
    this.cart = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`);

    if (this.cart.length == 0) {
      localStorage.removeItem('rsf-cart');
    }
  }

  addProduct(i: number, sum: boolean = false) {
    let p = this.cart[i];
    sum ? p.qtde_item++ : p.qtde_item--;

    this.cartService.updateItem(i, +p.qtde_item);
    this.reduceValue();
  }

  reduceValue() {
    this.cart = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`);
    this.itemList = signal(this.cart);
    console.log('reduceValue', this.itemList());
    this.totalAmount = computed(() => {
      return this.itemList().reduce((acc: number, curr: any) => acc + (curr.product.price_promo * curr.qtde_item), 0);
    });
  }
}
