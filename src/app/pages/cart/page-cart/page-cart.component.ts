import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss']
})
export class PageCartComponent implements OnInit {

  total_value: number = 0;

  cart: any = [
    {
      id: 1,
      name: 'The Sweter in Tosca',
      price: 45.00,
      quantity: 1,
      color: 'Tosca',
      size: 'L',
      img: './assets/images/product_01.jpg'
    },
    {
      id: 3,
      name: 'The Ocean',
      price: 85.11,
      quantity: 2,
      color: 'Ocean',
      size: 'XL',
      img: './assets/images/product_02.jpg'
    },
    {
      id: 1,
      name: 'The Ocean in Roma',
      price: 25.89,
      quantity: 4,
      color: 'Pink',
      size: 'M',
      img: './assets/images/product_03b.jpg'
    }
  ]

  ngOnInit(): void {
    this.cart.forEach((c: any) => {
      let v = c.price * c.quantity;
      this.total_value = this.total_value + v;
    });
  }
}
