import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { carouselMock } from '../../utils/carousel';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit {

  caroussel = carouselMock;

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


  constructor() { }

  ngOnInit(): void {
    
  }

}
