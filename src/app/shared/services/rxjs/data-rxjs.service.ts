import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { itemsCardRxjs } from 'src/app/models/Generics';

@Injectable({
  providedIn: 'root'
})
export class DataRxjsService {

  private cartItemsQuantity = new Subject<itemsCardRxjs>();
  cartItemsQuantity$ = this.cartItemsQuantity.asObservable();

  crtlItemCardQuantity(value: itemsCardRxjs) {
    console.log('ITEM UPDATE SERVICE:', value);
    this.cartItemsQuantity.next(value);
  }
}
