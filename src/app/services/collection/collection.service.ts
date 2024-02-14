import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from 'src/app/models/Collections';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  url = environment.BASE_URL;
  flag = 'collection';

  constructor(
    private http: HttpClient
  ) { }

  getAllCollections() {
    return this.http.get<Collection[]>((`${this.url}/${this.flag}`));
  }

  collectionById(collection_id: number) {
    return this.http.get<Collection>(`${this.url}/${this.flag}/${collection_id}`);
  }

  createCollection(collection: Collection) {
    return this.http.post<Collection>(`${this.url}/${this.flag}`, collection);
  }

  createCollectionList(collection: Collection) {
    return this.http.post<Collection>(`${this.url}/${this.flag}/save-list`, collection);
  }

  updateCollection(collection_id: number, collection: Collection) {
    return this.http.put<Collection>(`${this.url}/${this.flag}/${collection_id}`, collection);
  }
}
