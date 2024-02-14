import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit {

  caroussel: Product[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    startPosition: 0,
    // stagePadding: 50,
    margin: 10,
    navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };


  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.allProductsIsNew();
  }

  allProductsIsNew() {
    this.productService.productIsNew().subscribe({
      next: (data) => {
        this.caroussel = data.content;
        console.log('IS NEW PRODUCTS DATA', data);
      },
      error: (err) => {
        console.log('IS NEW PRODUCTS ERR', err);
      }
    })
  }

}
