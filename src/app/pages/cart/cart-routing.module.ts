import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCartComponent } from './page-cart/page-cart.component';

const routes: Routes = [
  { path: '', component: PageCartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
