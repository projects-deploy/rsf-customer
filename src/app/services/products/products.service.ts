import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/models/Pagination';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = environment.BASE_URL;
  flag = 'product';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>((`${this.url}/${this.flag}`));
  }

  productById(product_id: number) {
    return this.http.get<Product>(`${this.url}/${this.flag}/${product_id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${this.url}/${this.flag}`, product);
  }

  updateProduct(id_product: number, product: Product) {
    return this.http.put<Product>(`${this.url}/${this.flag}/${id_product}`, product);
  }

  removeProduct(id_product: number) {
    return this.http.delete<Product>(`${this.url}/${this.flag}/${id_product}`);
  }

  productByBrandId(brand_id: number) {
    return this.http.get<Product[]>(`${this.url}/${this.flag}/find/by-brand?brand=${brand_id}`);
  }

  productsByCategoryId(category_id: number) {
    return this.http.get<Product[]>(`${this.url}/${this.flag}/find/by-category?category=${category_id}`);
  }

  productByDepatmentId(department_id: number) {
    return this.http.get<Product[]>(`${this.url}/${this.flag}/find/by-department?=${department_id}`);
  }

  productIsNew(pageNumber: number = 2, pageSize: number = 5) {
    return this.http.get<Pagination<Product[]>>(`${this.url}/${this.flag}/find/by-news?page=${pageNumber}&size=${pageSize}`);
  }
}
