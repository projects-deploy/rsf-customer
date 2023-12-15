import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCategoryComponent } from './page-category/page-category.component';

const routes: Routes = [
  { path: '', component: PageCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
