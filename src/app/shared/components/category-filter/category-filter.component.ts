import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/Brand';
import { Category } from 'src/app/models/Category';
import { Department } from 'src/app/models/Department';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  brandNames: Brand[] = JSON.parse(`${sessionStorage.getItem('brand')}`) || [];
  catNames: Category[] = JSON.parse(`${sessionStorage.getItem('category')}`) || [];
  deptoNames: Department[] = JSON.parse(`${sessionStorage.getItem('depto')}`) || [];

  ngOnInit(): void {
  }
}
