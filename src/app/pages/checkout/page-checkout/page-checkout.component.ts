import { Component } from '@angular/core';

@Component({
  selector: 'app-page-checkout',
  templateUrl: './page-checkout.component.html',
  styleUrls: ['./page-checkout.component.scss']
})
export class PageCheckoutComponent {

  checkout: any = [
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
}
