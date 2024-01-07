import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { PageCategoryComponent } from './page-category/page-category.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CategoryInitialComponent } from './category-initial/category-initial.component';


@NgModule({
  declarations: [
    PageCategoryComponent,
    CategoryInitialComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule
  ]
})
export class CategoryModule { }
