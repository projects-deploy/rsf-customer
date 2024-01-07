import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url = environment.BASE_URL;
  flag = 'category';

  constructor(
    private http: HttpClient
  ) { }

  getAllCategorys() {
    return this.http.get<Category[]>((`${this.url}/${this.flag}`));
  }

  categoryById(category_id: number) {    return this.http.get<Category>(`${this.url}/${this.flag}/${category_id}`);
  }

  createCategory(category: Category) {
    return this.http.post<Category>(`${this.url}/${this.flag}`, category);
  }

  updateCategory(id_category: number, category: Category) {
    return this.http.put<Category>(`${this.url}/${this.flag}/${id_category}`, category);
  }

  removeCategory(id_category: number) {
    return this.http.delete<Category>(`${this.url}/${this.flag}/${id_category}`);
  }
}
