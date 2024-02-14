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
    this.getCarousel();
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
    this.tabsService.getProductsBytag(1).subscribe({
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
