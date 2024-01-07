import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductsService } from 'src/app/services/products/products.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem } from 'src/app/models/Cart';
import { Favorites } from 'src/app/models/Favorites';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = false;
  customer: number = 1;

  constructor(
    private route: Router,
    private cartService: CartService,
    private prodService: ProductsService,
    private favoritesService: FavoritesService,
  ) { }

  ngOnInit(): void {
    this.allProducts();
    setTimeout(() => {
      this.loading = true;
    }, 2000);
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

  addToCart(item: any) {
    let product: CartItem = {
      product: item,
      qtde_item: 1,
      amount: 0
    }
    this.cartService.addItem(product);
  }

  addToFavorites(product: any) {
    this.favoritesService.createFavorites(this.customer, +product.id).subscribe({
      next: (data) => {
        console.log('PRODUTO FAVOTIRADO', data);
      },
      error: (err) => {
        console.log('ERRO AO FAVORITAR O PRODUTO', err);
      }
    });
  }

}
