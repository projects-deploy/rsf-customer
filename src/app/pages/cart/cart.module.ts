import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { PageCartComponent } from './page-cart/page-cart.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataRxjsService } from 'src/app/shared/services/rxjs/data-rxjs.service';


@NgModule({
  declarations: [
    PageCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ],
  providers: [
    DataRxjsService
  ]
})
export class CartModule { }
