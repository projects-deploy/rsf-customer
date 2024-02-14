import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/models/Brand';
import { Category } from 'src/app/models/Category';
import { Department } from 'src/app/models/Department';
import { BrandsService } from 'src/app/services/brands/brands.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  local_str = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || 0;

  subscription: Subscription = new Subscription;

  menu_brand: Brand[] = [];
  menu_cat: Category[] = [];
  menu_depto: Department[] = [];

  opened: boolean = false;
  opened_cart: boolean = false;
  active_mobile: boolean = false;
  oppened_favorites: boolean = false;
  openModalPromotions: boolean = false;

  itens_cart: number = 0;
  ttl_favorites: number = 0;

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
    private rxjs: DataRxjsService,
    private cartService: CartService,
    private brandService: BrandsService,
    private deptoService: DepartmentsService,
    private categoryService: CategoriesService,
  ) {
    if (this.local_str.length > 0) {
      this.itens_cart = this.local_str.length;
    } else {
      localStorage.setItem('rsf-cart', JSON.stringify([]));
    }
  }

  ngOnInit(): void {
    this.allBrands();
    this.allCategories();
    this.allDepartments();

    this.rxjs.cartItemsQuantity$.subscribe(value => {
      this.itens_cart = value.qtde_items;
    });

    this.rxjs.openCloseMenu$.subscribe(value => {
      this.active_mobile = value;
    });

    this.rxjs.openCloseFavorites$.subscribe(data => {
      this.oppened_favorites = false;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  allCategories() {
    this.categoryService.getAllCategorys().subscribe({
      next: (data) => {

        this.menu_cat = data;
        data.forEach((item: Category) => {
          item.name_link = this.slug(item.name);
        });
        sessionStorage.setItem('category', JSON.stringify(data));
        // console.log('GET ALL CATEGORIES:', this.menu_cat);
      },
      error: (err) => {
        console.log('GET ALL CATEGORIES ERR:', err);
      }
    });
  }

  allBrands() {
    this.brandService.getAllBrands().subscribe({
      next: (data) => {

        data.forEach((item: Brand) => {
          item.name_link = this.slug(item.name);
        });

        this.menu_brand = data;
        sessionStorage.setItem('brand', JSON.stringify(data));
        // console.log('GET ALL BRANDS:', data);
      },
      error: (err) => {
        console.log('GET ALL BRANDS ERR:', err);
      }
    });
  }

  allDepartments() {
    this.deptoService.getAllDepartments().subscribe({
      next: (data) => {

        data.forEach((item: Department) => {
          item.name_link = this.slug(item.name);
        });

        this.menu_depto = data;
        sessionStorage.setItem('depto', JSON.stringify(data));
        // console.log('GET ALL DEPARTMENTS:', this.menu_depto);
      },
      error: (err) => {
        console.log('GET ALL DEPARTMENTS ERR:', err);
      }
    });
  }

  closeFavorites(e: any) {
    this.oppened_favorites = e;
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
    console.log('VALOR OUTPUT', e);
    this.active_mobile = e;
  }

  closeModalFilter() {
    this.rxjs.closeFilterModal(false);
  }

  goToCheckout(route: string) {
    this.opened_cart = false;
    this.route.navigate([`/${route}`]);
  }

  slug(input: string) {
    return input.toString().toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "-");
  }
}
