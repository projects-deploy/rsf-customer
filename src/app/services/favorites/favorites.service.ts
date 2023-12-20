import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorites } from 'src/app/models/Favorites';
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

  getAllFavoritess() {
    return this.http.get<Favorites[]>((`${this.url}/${this.flag}`));
  }

  createFavorites(customer_id: number, product_id: number, ) {
    return this.http.get<Favorites>(`${this.url}/${this.flag}/create?customer=${customer_id}&product=${product_id}`);
  }

  removeFavorites(id_favorites: number) {
    return this.http.delete<Favorites>(`${this.url}/${this.flag}/${id_favorites}`);
  }
}
