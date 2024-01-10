import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/Cart';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-thumbail',
  templateUrl: './thumbail.component.html',
  styleUrls: ['./thumbail.component.scss']
})
export class ThumbailComponent<T> implements OnInit {

  @Input() content: any;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    // console.log('thumbnail content', this.content);
  }

  addToCartStorage(item: any) {
    let obj: CartItem = {
      amount: 0,
      qtde_item: 1,
      product: item
    }
    this.cartService.addItem(obj);
  }

}
