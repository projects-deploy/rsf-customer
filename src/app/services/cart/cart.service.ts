import { Injectable, signal } from '@angular/core';
import { CartItem, ShoppingCart } from 'src/app/models/Cart';
import { DataRxjsService } from '../../shared/services/rxjs/data-rxjs.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  local_str = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || [];
  cartStrg: ShoppingCart = {
    items: this.local_str
  };

  cart = signal<ShoppingCart>({
    items: this.local_str.items || []
  });

  constructor(
    private rxjs: DataRxjsService
  ) { }

  addItem(item: CartItem) {

    const idx = this.cartStrg.items.findIndex((i: CartItem) => i.product.id === item.product.id);

    if (idx !== -1) {
      this.cartStrg.items[idx].qtde_item += item.qtde_item;
      this.cartStrg.items[idx].amount += parseFloat((item.qtde_item * item.product.price_promo).toFixed(2));
    } else {
      item.amount = parseFloat((item.qtde_item * item.product.price_promo).toFixed(2));
      this.cartStrg.items.push(item);
    }

    this.sendRxjsData(this.cartStrg.items);
    localStorage.setItem('rsf-cart', JSON.stringify(this.cartStrg.items));
  }

  removeItem(idx: any) {
    let storage = this.getStorage();
    if (storage != null) {
      console.log('valor de qt vindo do update', idx, storage);
      storage.splice(idx, 1);
      localStorage.removeItem('rsf-cart');
      localStorage.setItem('rsf-cart', JSON.stringify(storage));
      this.sendRxjsData(storage);
    }
  }

  updateItem(idx: number, qt: number) {

    if (qt == 0) {
      this.removeItem(idx);
      return;
    }

    let storage = this.getStorage();
    if (storage != null) {
      storage[idx].qtde_item = qt;
      storage[idx].amount = this.calcAmount(storage[idx]);

      localStorage.removeItem('rsf-cart');
      localStorage.setItem('rsf-cart', JSON.stringify(storage));

      this.sendRxjsData(storage);
    }
  }

  getStorage() {
    return JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || null;
  }

  calcAmount(item: CartItem) {
    return parseFloat((item.qtde_item * item.product.price_promo).toFixed(2));
  }

  sendRxjsData(values: any) {
    this.rxjs.crtlItemCardQuantity({
      qtde_items: values.length
    });
  }
}
