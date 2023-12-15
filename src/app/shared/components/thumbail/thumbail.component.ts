import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbail',
  templateUrl: './thumbail.component.html',
  styleUrls: ['./thumbail.component.scss']
})
export class ThumbailComponent<T> implements OnInit {

  @Input() content: any = [];


  constructor() { }

  ngOnInit(): void {
    console.log('QUE VEM:', this.content);
  }

}
