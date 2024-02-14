import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from 'src/app/models/Favorites';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  url = environment.BASE_URL;
  flag = 'favorites';

  constructor(
    private http: HttpClient
  ) { }

  getAllFavorites() {
    return this.http.get<Favorites[]>((`${this.url}/${this.flag}`));
  }

  getAllFavoritesCustomers(customer_id: number) {
    return this.http.get<Favorites[]>(`${this.url}/${this.flag}/find?q=${customer_id}`);
  }

  createFavorites(customer_id: number, product_id: number, ) {
    return this.http.get<Favorites>(`${this.url}/${this.flag}/create?customer=${customer_id}&product=${product_id}`);
  }

  removeFavorites(id_favorites: number) {
    return this.http.delete<Favorites>(`${this.url}/${this.flag}/delete/${id_favorites}`);
  }
}
