import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotifyArrival } from 'src/app/models/NotifyArrival';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NotifyArrivalService {

  url = environment.BASE_URL;
  flag = 'arrived';

  constructor(
    private http: HttpClient
  ) { }

  getAllNotifyArrival() {
    return this.http.get<NotifyArrival[]>((`${this.url}/${this.flag}`));
  }

  notifyArrivalById(notifyArrival_id: number) {
    return this.http.get<NotifyArrival>(`${this.url}/${this.flag}/${notifyArrival_id}`);
  }

  notifyArrivalByProductId(product_id: number) {
    return this.http.get<NotifyArrival>(`${this.url}/${this.flag}/find/by-product?p=${product_id}`);
  }

  createNotifyArrival(notifyArrival: NotifyArrival) {
    return this.http.post<NotifyArrival>(`${this.url}/${this.flag}`, notifyArrival);
  }

  updateNotifyArrival(id_notifyArrival: number, notifyArrival: NotifyArrival) {
    return this.http.put<NotifyArrival>(`${this.url}/${this.flag}/${id_notifyArrival}`, notifyArrival);
  }
}
