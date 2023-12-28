import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/Cart';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart/cart.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {

  category_id: string = '';
  categoryName: string = '';
  category: Category;
  products: Product[] = [];

  list_sort = [
    { name: 'Popular' },
    { name: 'Rating' },
    { name: 'Lasted' },
    { name: 'Price: low to high' },
    { name: 'Price: high to low' }
  ];

  constructor(
    private cartService: CartService,
    private actvRoute: ActivatedRoute,
    private catService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe(params => {
      this.category_id = params['q'];
      this.getProductsByCategory(+params['q']);
    });
  }

  selectedFilter(value: any) {
    console.log('value selected', value);
  }

  getProductsByCategory(category_id: number) {
    this.catService.categoryById(category_id).subscribe({
      next: (data) => {
        this.category = data;
        this.products = data.products;
        this.categoryName = data.name;
        // console.log('CATEGORY_ID DATA', this.category);
      },
      error: (err) => {
        console.log('CATEGORY_ID DATA ERR', err);
      }
    });
  }
}