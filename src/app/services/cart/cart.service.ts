import { Injectable, signal } from '@angular/core';
import { CartItem, ShoppingCart } from 'src/app/models/Cart';
import { DataRxjsService } from '../../shared/services/rxjs/data-rxjs.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  local_str = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || [];

  cart = signal<ShoppingCart>({
    items: this.local_str.items || [],
    totalAmount: this.local_str.totalAmount || 0
  });

  constructor(
    private rxjs: DataRxjsService
  ) { }

  addItem(item: CartItem) {

    this.cart.mutate(currentCart => {
      const existingItemIndex = currentCart.items.findIndex(i => i.products.id === item.products.id);
      console.log('CART SERVICE', item, existingItemIndex);

      if (existingItemIndex !== -1) {
        currentCart.items[existingItemIndex].quantity = item.quantity + 1;
      } else {
        currentCart.items.push(item);
      }
      currentCart.totalAmount += item.products.price_product * item.quantity;

      this.sendRxjsData(currentCart);
      localStorage.setItem('rsf-cart', JSON.stringify(currentCart));
    });
  }

  removeItem(idx: any) {
    this.cart.mutate(currentCart => {
      const item = currentCart.items[idx];
      currentCart.totalAmount -= item.products.price_product * item.quantity;
      currentCart.items.splice(idx, 1);
      this.sendRxjsData(currentCart);
      localStorage.removeItem('rsf-cart');
      localStorage.setItem('rsf-cart', JSON.stringify(currentCart));
    });
  }

  updateItem(idx: number, item: CartItem, crtl: boolean) {
    this.cart.mutate(currentCart => {

      if (item.quantity == 0) {
        this.removeItem(idx);
        return;
      }

      currentCart.items[idx].quantity = item.quantity;

      crtl ? currentCart.totalAmount += item.products.price_product * item.quantity : currentCart.totalAmount -= item.products.price_product * item.quantity;

      this.sendRxjsData(currentCart);
    });
  }

  sendRxjsData(values: any) {

    this.rxjs.crtlItemCardQuantity({
      qtde_items: values.items.length,
      amount: values.totalAmount
    });
    console.log('ITEM UPDATE cart:', values);
  }
}
