import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  url = environment.BASE_URL;
  flag = 'customer';

  constructor(
    private http: HttpClient
  ) { }

  getAllCustomer() {
    return this.http.get<Customer[]>((`${this.url}/${this.flag}`));
  }

  customerById(customer_id: number) {
    return this.http.get<Customer>(`${this.url}/${this.flag}/${customer_id}`);
  }

  createCustomer(customer: Customer) {
    return this.http.post<Customer>(`${this.url}/${this.flag}`, customer);
  }

  updateCustomer(id_customer: number, customer: Customer) {
    return this.http.put<Customer>(`${this.url}/${this.flag}/${id_customer}`, customer);
  }

  removeCustomer(id_customer: number) {
    return this.http.delete<Customer>(`${this.url}/${this.flag}/${id_customer}`);
  }
}
