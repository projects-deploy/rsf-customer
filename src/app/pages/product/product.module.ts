import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ProductInitComponent } from './product-init/product-init.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductInitComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule { }
