import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  url = environment.BASE_URL;
  flag = 'order';

  constructor(
    private http: HttpClient
  ) { }

  getAllOrders() {
    return this.http.get<Order[]>((`${this.url}/${this.flag}`));
  }

  orderById(order_id: number) {
    return this.http.get<Order>(`${this.url}/${this.flag}/${order_id}`);
  }

  orderByReceipt(receiptNumber: string) {
    return this.http.get<Order>(`${this.url}/${this.flag}/by-receipt/${receiptNumber}`);
  }

  createOrder(order: Order, code: string) {
    return this.http.post<Order>(`${this.url}/${this.flag}?code=${code}`, order);
  }

  updateOrder(id_order: number, order: Order) {
    return this.http.put<Order>(`${this.url}/${this.flag}/${id_order}`, order);
  }

  removeOrder(id_order: number) {
    return this.http.delete<Order>(`${this.url}/${this.flag}/${id_order}`);
  }
}
