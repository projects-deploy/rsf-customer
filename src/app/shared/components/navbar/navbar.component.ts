import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem, ShoppingCart } from 'src/app/models/Cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  opened: boolean = false;
  opened_cart: boolean = false;
  active_mobile: boolean = false;
  openModalPromotions: boolean = false;

  ttl_favorites: number = 0;
  itens_cart: number = this.cartService.cart().items.length;

  totalAmount = this.cartService.cart().totalAmount;
  products_cart: any = this.cartService.cart().items;

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

  constructor(
    private route: Router,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    console.log('PRODUCTS CART MENU NAVBAR', this.cartService.cart());
  }

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

  updateQuantity(sun: boolean, idx: number) {
    let product = this.products_cart[idx];
    sun ? product.quantity++ : product.quantity--;
    console.log('totalAmount', this.cartService.cart().items[idx]);

    // this.cartService.addItem(this.cartService.cart().items[idx]);

    // this.cartService.addItem(idx);
  }

  goToCheckout(route: string) {
    this.opened_cart = false;
    this.route.navigate([`/${route}`]);
  }
}
