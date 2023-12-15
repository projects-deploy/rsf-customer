import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialRoutingModule } from './initial-routing.module';
import { ContentComponent } from './content/content.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    InitialRoutingModule,
    CarouselModule,
    MaterialModule
  ]
})
export class InitialModule { }
