import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { PageAllProductsComponent } from './page-all-products/page-all-products.component';
import { PageSingleProductComponent } from './page-single-product/page-single-product.component';

@NgModule({
  declarations: [
    PageAllProductsComponent,
    PageSingleProductComponent,
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SingleModule { }
