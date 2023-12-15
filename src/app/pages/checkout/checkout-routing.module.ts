import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCheckoutComponent } from './page-checkout/page-checkout.component';

const routes: Routes = [
  { path: '', component: PageCheckoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
