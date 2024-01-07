import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandInitialComponent } from './brand-initial/brand-initial.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    BrandInitialComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    MaterialModule
  ]
})
export class BrandModule { }
