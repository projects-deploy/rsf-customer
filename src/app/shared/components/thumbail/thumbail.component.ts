import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-thumbail',
  templateUrl: './thumbail.component.html',
  styleUrls: ['./thumbail.component.scss']
})
export class ThumbailComponent<T> implements OnInit {

  @Input() content: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
