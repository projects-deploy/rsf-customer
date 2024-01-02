import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { itemsCardRxjs } from 'src/app/models/Generics';

@Injectable({
  providedIn: 'root'
})
export class DataRxjsService {

  private cartItemsQuantity = new Subject<itemsCardRxjs>();
  cartItemsQuantity$ = this.cartItemsQuantity.asObservable();

  private openCloseMenu = new Subject<boolean>();
  openCloseMenu$ = this.openCloseMenu.asObservable();

  private openCloseFilterModal = new Subject<boolean>();
  openCloseFilterModal$ = this.openCloseFilterModal.asObservable();

  crtlItemCardQuantity(value: itemsCardRxjs) {
    this.cartItemsQuantity.next(value);
  }

  crtlOpenCloseMenuCard(value: boolean) {
    this.openCloseMenu.next(value);
  }

  closeFilterModal(value: boolean) {
    this.openCloseFilterModal.next(value);
  }

}
