import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { BrandsService } from 'src/app/services/brands/brands.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  brandName: string = '';

  constructor(
    private rxjs: DataRxjsService,
    private actvRoute: ActivatedRoute,
    private prodService: ProductsService,
  ) { }

  ngOnInit(): void {
    
    this.actvRoute.queryParams.subscribe(params => {
      this.getProductsByBrandsId(+params['q']);
    });
  }

  getProductsByBrandsId(brand_id: number) {
    this.prodService.productByBrandId(brand_id).subscribe({
      next: (data: Product[]) => {
        this.brandName = data[0].brand.name;
        this.rxjs.sendProducts(data);
        console.log('PRODUCTS BRAND_ID DATA', data);
      },
      error: (err) => {
        console.log('PRODUCTS BRAND_ID DATA ERR', err);
      }
    });
  }

}
