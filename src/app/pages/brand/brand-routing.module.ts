import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandInitialComponent } from './brand-initial/brand-initial.component';
import { BrandListComponent } from './brand-list/brand-list.component';

const routes: Routes = [
  {
    path: '', component: BrandInitialComponent, children: [
      { path: '', component: BrandListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
