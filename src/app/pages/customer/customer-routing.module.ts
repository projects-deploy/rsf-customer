import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInitComponent } from './customer-init/customer-init.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerForgotComponent } from './customer-forgot/customer-forgot.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';

const routes: Routes = [
  {
    path: '', component: CustomerInitComponent, children: [
      { path: '', component: CustomerLoginComponent },
      { path: 'forgot', component: CustomerForgotComponent },
      { path: 'create', component: CustomerCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
