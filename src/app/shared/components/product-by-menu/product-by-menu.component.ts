import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-product-by-menu',
  templateUrl: './product-by-menu.component.html',
  styleUrls: ['./product-by-menu.component.scss']
})
export class ProductByMenuComponent implements OnInit {

  openned_sidebar: boolean = false;
  products: Product[] = [];

  list_sort = [
    { name: 'Popular' },
    { name: 'Rating' },
    { name: 'Lasted' },
    { name: 'Price: low to high' },
    { name: 'Price: high to low' }
  ];

  constructor(
    private rxjs: DataRxjsService,
  ) { }

  ngOnInit(): void {
    this.rxjs.dataProducts$.subscribe(data => {
      if (data) {
        this.products = data;
      }
    });
  }

  selectedFilter(value: any) {
    console.log('value selected', value);
  }

}
