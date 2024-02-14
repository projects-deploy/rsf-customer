import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Highlights } from 'src/app/models/Highlights';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {

  url = environment.BASE_URL;
  flag = 'highlights';

  constructor(
    private http: HttpClient
  ) { }

  getAllHighlights() {
    return this.http.get<Highlights[]>((`${this.url}/${this.flag}`));
  }

  highlightsById(highlights_id: number) {
    return this.http.get<Highlights>(`${this.url}/${this.flag}/${highlights_id}`);
  }

  createHighlights(highlights: Highlights) {
    return this.http.post<Highlights>(`${this.url}/${this.flag}`, highlights);
  }

  createHighlightsList(highlights: Highlights) {
    return this.http.post<Highlights>(`${this.url}/${this.flag}/save-list`, highlights);
  }

  updateHighlights(id_highlights: number, highlights: Highlights) {
    return this.http.put<Highlights>(`${this.url}/${this.flag}/${id_highlights}`, highlights);
  }
}
