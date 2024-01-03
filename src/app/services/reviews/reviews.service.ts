import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Reviews } from 'src/app/models/Reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  url = environment.BASE_URL;
  flag = 'review';

  constructor(
    private http: HttpClient
  ) { }

  getAllReviewss() {
    return this.http.get<Reviews[]>((`${this.url}/${this.flag}`));
  }

  reviewById(review_id: number) {
    return this.http.get<Reviews>(`${this.url}/${this.flag}/${review_id}`);
  }

  reviewsOfProductsId(product_id: number) {
    return this.http.get<Reviews[]>(`${this.url}/${this.flag}/by-product/${product_id}`);
  }

  createReviews(review: Reviews) {
    return this.http.post<Reviews>(`${this.url}/${this.flag}`, review);
  }

  updateReviews(id_review: number, review: Reviews) {
    return this.http.put<Reviews>(`${this.url}/${this.flag}/${id_review}`, review);
  }

  removeReviews(id_review: number) {
    return this.http.delete<Reviews>(`${this.url}/${this.flag}/${id_review}`);
  }
}
