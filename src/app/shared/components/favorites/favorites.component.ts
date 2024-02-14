import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { Favorites } from 'src/app/models/Favorites';
import { Product } from 'src/app/models/Product';
import { FavoritesService } from 'src/app/services/favorites/favorites.service';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  customer: Customer = JSON.parse(`${localStorage.getItem(('rsf-customer'))}`) || 0;

  favorites: Favorites[] = [];
  products: Product[] = [];

  constructor(
    private rxjs: DataRxjsService,
    private favoritesService: FavoritesService,
  ) { }

  ngOnInit(): void {
    this.getCustomerFavorites();
  }

  getCustomerFavorites() {
    this.favoritesService.getAllFavoritesCustomers(Number(this.customer.id)).subscribe({
      next: (data) => {
        data.forEach((item: any) => {
          this.products.push(item.product);
        });

        localStorage.setItem('rsf-favorites', JSON.stringify(data));
        console.log('GET ALL getAllFavoritesCustomers:', this.products);
      },
      error: (err) => {
        console.log('GET ALL getAllFavoritesCustomers ERR:', err);
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
