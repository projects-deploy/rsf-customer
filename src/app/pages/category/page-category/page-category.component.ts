import { Component } from '@angular/core';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent {

  list_sort = [
    { name: 'Popular' },
    { name: 'Rating' },
    { name: 'Lasted' },
    { name: 'Price: low to high' },
    { name: 'Price: high to low' }
  ];

  products: any = [
    {
      id: 21,
      imgA: './assets/images/product_01.jpg',
      imgB: './assets/images/product_01b.jpg',
      discount: 12,
      name: 'The Swater in Tosca',
      price_before: 189.22,
    },
    {
      id: 13,
      imgA: './assets/images/product_02.jpg',
      imgB: './assets/images/product_02b.jpg',
      discount: 8,
      name: 'The Swater in Tosca 2',
      price_before: 256.55,
    },
    {
      id: 51,
      imgA: './assets/images/product_03.jpg',
      imgB: './assets/images/product_03b.jpg',
      discount: 5,
      name: 'The Swater in Tosca 3',
      price_before: 206.00,
    },
    {
      id: 21,
      imgA: './assets/images/product_01.jpg',
      imgB: './assets/images/product_01b.jpg',
      discount: 12,
      name: 'The Swater in Tosca',
      price_before: 189.22,
    },
    {
      id: 13,
      imgA: './assets/images/product_02.jpg',
      imgB: './assets/images/product_02b.jpg',
      discount: 8,
      name: 'The Swater in Tosca 2',
      price_before: 256.55,
    },
    {
      id: 51,
      imgA: './assets/images/product_03.jpg',
      imgB: './assets/images/product_03b.jpg',
      discount: 5,
      name: 'The Swater in Tosca 3',
      price_before: 206.00,
    },
    {
      id: 21,
      imgA: './assets/images/product_01.jpg',
      imgB: './assets/images/product_01b.jpg',
      discount: 12,
      name: 'The Swater in Tosca',
      price_before: 189.22,
    },
    {
      id: 13,
      imgA: './assets/images/product_02.jpg',
      imgB: './assets/images/product_02b.jpg',
      discount: 8,
      name: 'The Swater in Tosca 2',
      price_before: 256.55,
    },
    {
      id: 51,
      imgA: './assets/images/product_03.jpg',
      imgB: './assets/images/product_03b.jpg',
      discount: 5,
      name: 'The Swater in Tosca 3',
      price_before: 206.00,
    }
  ]

  selectedFilter(value: any) {
    console.log('value selected', value);
  }

}