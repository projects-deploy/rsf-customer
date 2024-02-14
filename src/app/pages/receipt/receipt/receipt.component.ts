import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { OrdersService } from 'src/app/services/ordres/orders.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {

  order: Order = {
    status: 0,
    payment: '',
    shipping: '',
    comments: '',
    date_order: new Date(Date.now()),
    value_total: 0,
    items: [],
    customer: {
      uf: '',
      cpf: '',
      cep: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      numero: 0,
      bairro: '',
      link_photo: '',
      localidade: '',
      logradouro: '',
      complemento: '',
      birth_date: new Date(Date.now()),
      favorites: []
    }
  };

  constructor(
    private actvRoute: ActivatedRoute,
    private orderService: OrdersService,
  ) { }

  ngOnInit(): void {
    this.actvRoute.queryParams.subscribe(params => {
      this.orderByReceiptNumber(params['receipt']);
    });
  }

  orderByReceiptNumber(receiptNumber: string) {
    this.orderService.orderByReceipt(receiptNumber).subscribe({
      next: (data) => {
        this.order = data;
        console.log('RECIBO DATA:', data);
      },
      error: (err) => {
        console.log('RECIBO ERR:', err);
      }
    });
  }

}
