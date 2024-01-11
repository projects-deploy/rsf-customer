import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';
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
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe(params => {
      this.category_id = params['q'];
      this.getProductsByCategoryId(+params['q']);
    });

    this.rxjs.openCloseFilterModal$.subscribe(value => {
      this.openned_sidebar = value;
    });
  }

  selectedFilter(value: any) {
    console.log('value selected', value);
  }

  getProductsByCategoryId(category_id: number) {
    this.productService.productsByCategoryId(category_id).subscribe({
      next: (data: Product[]) => {
        this.categoryName = data[0]?.category.name;
        this.rxjs.sendProducts(data);
        console.log('CATEGORY_ID DATA', data);
      },
      error: (err) => {
        console.log('CATEGORY_ID DATA ERR', err);
      }
    });
  }
}