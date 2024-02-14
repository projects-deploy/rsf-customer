import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tags } from 'src/app/models/Tabs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  url = environment.BASE_URL;
  flag = 'tags';

  constructor(
    private http: HttpClient
  ) { }

  getAllTagss() {
    return this.http.get<Tags[]>((`${this.url}/${this.flag}`));
  }

  tagsById(tags_id: number) {
    return this.http.get<Tags>(`${this.url}/${this.flag}/${tags_id}`);
  }

  createTags(tags: Tags) {
    return this.http.post<Tags>(`${this.url}/${this.flag}`, tags);
  }

  updateTags(id_tags: number, tags: Tags) {
    return this.http.put<Tags>(`${this.url}/${this.flag}/${id_tags}`, tags);
  }
}
