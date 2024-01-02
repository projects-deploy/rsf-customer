import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Product } from 'src/app/models/Product';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {

  category_id: string = '';
  categoryName: string = '';

  openned_sidebar: boolean = false;

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
    private rxjs: DataRxjsService,
    private actvRoute: ActivatedRoute,
    private catService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe(params => {
      this.category_id = params['q'];
      this.getProductsByCategory(+params['q']);
    });

    this.rxjs.openCloseFilterModal$.subscribe(value => {
      this.openned_sidebar = value;
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