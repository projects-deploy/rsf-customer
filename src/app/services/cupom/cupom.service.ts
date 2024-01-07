import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cupom } from 'src/app/models/Cupom';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  url = environment.BASE_URL;
  flag = 'coupon';

  constructor(
    private http: HttpClient
  ) { }

  apllyCupom(code: string) {
    return this.http.get<Cupom>(`${this.url}/${this.flag}/apply?code=${code}`);
  }
}
