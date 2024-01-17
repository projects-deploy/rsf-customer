import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Brand } from 'src/app/models/Brand';

@Component({
  selector: 'app-default-carousel',
  templateUrl: './default-carousel.component.html',
  styleUrls: ['./default-carousel.component.scss']
})
export class DefaultCarouselComponent {

  carousel: Brand[] = JSON.parse(`${sessionStorage.getItem('brand')}`) || [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    // nav: true,
    autoplay: true,
  }

  constructor() { }
}
