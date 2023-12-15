import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private prodService: ProductsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.allProducts();
  }

  router() {
    this.route.navigate(['product/detail']);
  }

  allProducts() {
    this.prodService.getAllProducts().subscribe({
      next: (data) => {
        data.forEach((item: Product) => {
          item.is_discount = false;
          if (item.discount > 0) {
            item.is_discount = true;
            item.price_promo = item.price_product - ((item.price_product * item.discount) / 100);
          }
        });
        this.products = data;
      },
      error: (err) => {
        console.log('GET ALL PRODUCTS ERR:', err);
      }
    });
  }

  addToCart(item: Product) {
    let item_cart: any[] = [];
    item_cart.push(item);
    console.log('ITEM PRODUCT TO CART', item_cart);
  }

}
