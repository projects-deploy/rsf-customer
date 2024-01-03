import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { itemsCardRxjs } from 'src/app/models/Generics';
import { Reviews } from 'src/app/models/Reviews';

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

  private dataReviews = new Subject<Reviews[]>();
  dataReviews$ = this.dataReviews.asObservable();

  crtlItemCardQuantity(value: itemsCardRxjs) {
    this.cartItemsQuantity.next(value);
  }

  crtlOpenCloseMenuCard(value: boolean) {
    this.openCloseMenu.next(value);
  }

  closeFilterModal(value: boolean) {
    this.openCloseFilterModal.next(value);
  }

  sendReviews(data: Reviews[]) {
    this.dataReviews.next(data);
  }

}
