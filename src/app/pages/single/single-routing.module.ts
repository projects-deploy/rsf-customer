import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSingleProductComponent } from './page-single-product/page-single-product.component';
import { PageAllProductsComponent } from './page-all-products/page-all-products.component';

const routes: Routes = [
  { path: '', component: PageAllProductsComponent, children:[
    { path: '', component: PageSingleProductComponent },
    { path: 'detail', component: PageSingleProductComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleRoutingModule { }
