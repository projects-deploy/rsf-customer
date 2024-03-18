import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Favorites } from 'src/app/models/Favorites';
import { Product } from 'src/app/models/Product';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || null;

  favorites: Favorites[] = [];
  products: Product[] = [];

  enableFavorites: boolean = false;

  constructor(
    private rxjs: DataRxjsService,
    private favoritesService: FavoritesService,
    private route: Router
  ) { }

  ngOnInit(): void {
    if (this.customer !== null) {
      this.getCustomerFavorites();
      this.enableFavorites = true;
    }
  }

  getCustomerFavorites() {
    this.favoritesService.getAllFavoritesCustomers(Number(this.customer.id)).subscribe({
      next: (data) => {
        data.forEach((item: any) => {
          this.products.push(item.product);
        });

        localStorage.setItem('rsf-favorites', JSON.stringify(data));
        console.log('GET ALL getAllFavoritesCustomers:', this.products);
        this.enableFavorites = false;
      },
      error: (err) => {
        console.log('GET ALL getAllFavoritesCustomers ERR:', err);
        this.enableFavorites = false;
      }
    });
  }

  removeFavorite(product: Product) {
    this.products = [];
    this.favoritesService.removeFavorites(Number(product.id)).subscribe({
      next: (data) => {
        this.rxjs.crtlFavorites(true);
        this.getCustomerFavorites();
        // console.log('GET ALL getAllFavoritesCustomers:', data);
      },
      error: (err) => {
        console.log('GET ALL getAllFavoritesCustomers ERR:', err);
      }
    });
  }
}
