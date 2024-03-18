import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Carousel } from 'src/app/models/Carousel';
import { CarouselService } from 'src/app/services/carousel/carousel.service';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { TabsService } from 'src/app/services/tabs/tabs.service';
import { hoddie, shirt, sweater } from 'src/app/shared/utils/ProductsMock';
import { bannerInit, imagesInstagram } from 'src/app/shared/utils/carousel';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  carouselRef: any;

  shirtTemplate: boolean = false;
  hoddieTemplate: boolean = false;
  sweaterTemplate: boolean = false;

  showSelect: boolean = false;

  selectTemplate = [
    { name: 'Sweater', value: 'sweater' },
    { name: 'Hoodie', value: 'hoodie' },
    { name: 'Shirt', value: 'shirt' }
  ];

  productsByTag: any = [];

  shirtProducts = shirt;
  hoddieProducts = hoddie;
  sweaterProduct = sweater;
  insta_photos = imagesInstagram;

  carousel: Carousel[] = [];

  carouselMock = [
    {
      id: 1,
      links: 'https://hips.hearstapps.com/hmg-prod/images/lead-image-spring-hannah-01-64077144f3607.jpg?crop=1xw:0.999632892804699xh;center,top&resize=1200:*',
      createdAt: '2024-02-29T00:00:000',
      updatedAt: '2024-02-29T00:00:000'
    },
    {
      id: 2,
      links: 'https://hips.hearstapps.com/hmg-prod/images/lead-image-hannah3-01-1672764993.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      createdAt: '2024-02-29T00:00:000',
      updatedAt: '2024-02-29T00:00:000'
    },
    {
      id: 3,
      links: 'https://hips.hearstapps.com/hmg-prod/images/lead-image-plus-01-1660255255.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      createdAt: '2024-02-29T00:00:000',
      updatedAt: '2024-02-29T00:00:000'
    },
    {
      id: 4,
      links: 'https://hips.hearstapps.com/hmg-prod/images/lead-image-school-look-01-1661894139.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
      createdAt: '2024-02-29T00:00:000',
      updatedAt: '2024-02-29T00:00:000'
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoHeight: false,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
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
    autoplay: true,
    autoplayTimeout: 5000,
  }

  constructor(
    private tabsService: TabsService,
    private carouselService: CarouselService,
    private collectionService: CollectionService,
  ) { }

  ngOnInit(): void {
    // this.getCarousel();
    this.getProductByTag();
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

  /* CAROUSEL */
  getCarousel() {
    this.carouselService.carouselById(1).subscribe({
      next: (data) => {
        let carouselSplitLink = data.links.split(',');
        carouselSplitLink.forEach((item: any, i: number) => {
          this.carousel.push({
            id: (i + 1),
            links: item,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          });
        });

        // console.log('GET CAROUSEL DATA', this.carousel);
      },
      error: (err) => {
        console.log('GET CAROUSEL ERRR', err);
      }
    });
  }

  getProductByTag() {
    this.tabsService.tabsById(1).subscribe({
      next: (data) => {

        this.productsByTag = data;
        console.log('IS NEW getProductsBytag DATA', data);
      },
      error: (err) => {
        console.log('IS NEW getProductsBytag ERR', err);
      }
    });
  }
}
