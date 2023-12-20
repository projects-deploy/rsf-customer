import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { PageCheckoutComponent } from './page-checkout/page-checkout.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    PageCheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MaterialModule
  ]
})
export class CheckoutModule { }
