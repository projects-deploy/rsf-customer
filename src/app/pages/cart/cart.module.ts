import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { PageCartComponent } from './page-cart/page-cart.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    PageCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ]
})
export class CartModule { }
