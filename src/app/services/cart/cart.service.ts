import { Injectable, signal } from '@angular/core';
import { CartItem, ShoppingCart } from 'src/app/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  local_str = JSON.parse(`${localStorage.getItem(('RSF-CART'))}`) || [];

  cart = signal<ShoppingCart>({
    items: this.local_str.items || [],
    totalAmount: this.local_str.totalAmount || 0
  });

  constructor() { }

  addItem(item: CartItem) {

    this.cart.mutate(currentCart => {
      const existingItemIndex = currentCart.items.findIndex(i => i.products.id === item.products.id);

      let valuePerProduct = item.products.price_product * item.quantity;

      if (existingItemIndex !== -1) {
        currentCart.items[existingItemIndex].quantity += item.quantity;
      } else { 
        currentCart.items.push(item);
      }
      currentCart.totalAmount += item.products.price_product * item.quantity;
      localStorage.setItem('RSF-CART', JSON.stringify(currentCart));
    });
  }

  removeItem(idx: any) {
    this.cart.mutate(currentCart => {
      const item = currentCart.items[idx];
      currentCart.totalAmount -= item.products.price_product * item.quantity;
      currentCart.items.splice(idx, 1);
      localStorage.removeItem('RSF-CART');
      localStorage.setItem('RSF-CART', JSON.stringify(currentCart));
    });
  }

  updateQuantity(idx: any) {
    this.cart.mutate(currentCart => {
      const item = currentCart.items[idx];
      currentCart.totalAmount += item.products.price_product * item.quantity;
      if (item.quantity == 0) {
        this.removeItem(idx);
        if (currentCart.items.length === 0) {
          currentCart.totalAmount = 0;
        }
        return;
      }
      localStorage.removeItem('RSF-CART');
      localStorage.setItem('RSF-CART', JSON.stringify(currentCart));
    });
  }
}
