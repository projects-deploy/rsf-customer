import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  opened: boolean = false;
  opened_cart: boolean = false;
  active_mobile: boolean = false;
  openModalPromotions: boolean = false;

  itens_cart: number = 0;
  ttl_favorites: number = 0;

  destak_images = [
    {
      id: 21,
      img: './assets/images/product_01.jpg',
      imgB: './assets/images/product_01b.jpg',
      discount: 12,
      name: 'The Swater in Tosca',
      current_price: 189.22,
    },
    {
      id: 13,
      img: './assets/images/product_02.jpg',
      imgB: './assets/images/product_02b.jpg',
      discount: 8,
      name: 'The Swater in Tosca 2',
      current_price: 256.55,
    },
    {
      id: 51,
      img: './assets/images/product_03.jpg',
      imgB: './assets/images/product_03b.jpg',
      discount: 5,
      name: 'The Swater in Tosca 3',
      current_price: 206.00,
    }
  ]

  openMobileMenu() {
    this.active_mobile = true;
  }

  closeMobileMenu() {
    this.active_mobile = false;
  }

  openPromotions() {
    this.openModalPromotions = !this.openModalPromotions;
  }

  openCart() {
    this.opened_cart = true;
  }

  closeCartMenu() {
    this.opened_cart = false;
  }

  crtlCartMenu(e: any) { // OUTPUT
    this.opened_cart = e;
  }
}
