import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { hoddie, shirt, sweater } from 'src/app/shared/utils/ProductsMock';
import { carouselMock, imagesInstagram } from 'src/app/shared/utils/carousel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  shirtTemplate: boolean = false;
  hoddieTemplate: boolean = false;
  sweaterTemplate: boolean = false;

  showSelect: boolean = false;

  selectTemplate = [
    { name: 'Sweater', value: 'sweater' },
    { name: 'Hoodie', value: 'hoodie' },
    { name: 'Shirt', value: 'shirt' }
  ];

  shirtProducts = shirt;
  hoddieProducts = hoddie;
  carousel = carouselMock;
  sweaterProduct = sweater;
  insta_photos = imagesInstagram;

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
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
    autoplay: true
  }

  changeTemplate(value: string) {

    this.shirtTemplate = false;
    this.hoddieTemplate = false;
    this.sweaterTemplate = false;

    switch (value) {
      case 'sweater':
        this.sweaterTemplate = true;
        break;

      case 'hoddie':
        this.hoddieTemplate = true;
        break;

      case 'shirt':
        this.shirtTemplate = true;
        break;
    }
  }

  selectShow() {
    this.showSelect = !this.showSelect;
  }
}
