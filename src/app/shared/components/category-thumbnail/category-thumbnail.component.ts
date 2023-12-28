import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.scss']
})
export class CategoryThumbnailComponent implements OnInit {

  @Input() content: any = [];
  @Output() cat_name: any = new EventEmitter<string>();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
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
