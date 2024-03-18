import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-forgot',
  templateUrl: './customer-forgot.component.html',
  styleUrls: ['./customer-forgot.component.scss']
})
export class CustomerForgotComponent implements OnInit {

  customerEmail: string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
