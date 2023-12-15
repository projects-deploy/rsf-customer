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
  insta_photos = imagesInstagram

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    startPosition: 0,
    // stagePadding: 50,
    margin: 10,
    navText: ['<i class="ri-arrow-left-line"></i>', '<i class="ri-arrow-right-line"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

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
