import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tabs } from 'src/app/models/Tags';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  url = environment.BASE_URL;
  flag = 'tabs';

  constructor(
    private http: HttpClient
  ) { }

  getAllTabs() {
    return this.http.get<Tabs[]>((`${this.url}/${this.flag}`));
  }

  getProductsBytag(tabs_id: number) {
    return this.http.get<Tabs>(`${this.url}/${this.flag}/products-tabs/${tabs_id}`);
  }

  tabsById(tabs_id: number) {
    return this.http.get<Tabs>(`${this.url}/${this.flag}/${tabs_id}`);
  }

  createTabs(tabs: Tabs) {
    return this.http.post<Tabs>(`${this.url}/${this.flag}`, tabs);
  }

  updateTabs(id_tabs: number, tabs: Tabs) {
    return this.http.put<Tabs>(`${this.url}/${this.flag}/${id_tabs}`, tabs);
  }
}
