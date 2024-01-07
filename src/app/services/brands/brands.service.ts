import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from 'src/app/models/Brand';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  url = environment.BASE_URL;
  flag = 'brand';

  constructor(
    private http: HttpClient
  ) { }

  getAllBrands() {
    return this.http.get<Brand[]>((`${this.url}/${this.flag}`));
  }

  brandById(brand_id: number) {
    return this.http.get<Brand>(`${this.url}/${this.flag}/${brand_id}`);
  }

  createBrand(brand: Brand) {
    return this.http.post<Brand>(`${this.url}/${this.flag}`, brand);
  }

  updateBrand(id_brand: number, brand: Brand) {
    return this.http.put<Brand>(`${this.url}/${this.flag}/${id_brand}`, brand);
  }

  removeBrand(id_brand: number) {
    return this.http.delete<Brand>(`${this.url}/${this.flag}/${id_brand}`);
  }
}
