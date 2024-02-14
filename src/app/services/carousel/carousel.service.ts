import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carousel } from 'src/app/models/Carousel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  url = environment.BASE_URL;
  flag = 'carousel';

  constructor(
    private http: HttpClient
  ) { }

  getAllCarousels() {
    return this.http.get<Carousel[]>((`${this.url}/${this.flag}`));
  }

  carouselById(carousel_id: number) {
    return this.http.get<Carousel>(`${this.url}/${this.flag}/${carousel_id}`);
  }

  createCarousel(carousel: Carousel) {
    return this.http.post<Carousel>(`${this.url}/${this.flag}`, carousel);
  }

  createCarouselList(carousel: Carousel) {
    return this.http.post<Carousel>(`${this.url}/${this.flag}/save-list`, carousel);
  }

  updateCarousel(id_carousel: number, carousel: Carousel) {
    return this.http.put<Carousel>(`${this.url}/${this.flag}/${id_carousel}`, carousel);
  }

  removeCarousel(id_carousel: number) {
    return this.http.delete<Carousel>(`${this.url}/${this.flag}/${id_carousel}`);
  }
}
