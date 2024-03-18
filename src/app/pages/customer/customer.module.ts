import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerInitComponent } from './customer-init/customer-init.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CustomerForgotComponent } from './customer-forgot/customer-forgot.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';


@NgModule({
  declarations: [
    CustomerInitComponent,
    CustomerForgotComponent,
    CustomerLoginComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MaterialModule
  ]
})
export class CustomerModule { }
