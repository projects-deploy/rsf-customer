import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newsletter } from 'src/app/models/Newsletter';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  url = environment.BASE_URL;
  flag = 'newsletter';

  constructor(
    private http: HttpClient
  ) { }

  createNewsletter(newsletter: Newsletter) {
    return this.http.post<Newsletter>(`${this.url}/${this.flag}`, newsletter);
  }
}
