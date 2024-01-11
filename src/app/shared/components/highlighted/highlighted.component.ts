import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-highlighted',
  templateUrl: './highlighted.component.html',
  styleUrls: ['./highlighted.component.scss']
})
export class HighlightedComponent implements OnInit {

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.allProductsIsNew();
  }

  allProductsIsNew() {
    this.productService.productIsNew().subscribe({
      next: (data) => {
        console.log('IS NEW PRODUCTS DATA', data);
      },
      error: (err) => {
        console.log('IS NEW PRODUCTS ERR', err);
      }
    })
  }

}
