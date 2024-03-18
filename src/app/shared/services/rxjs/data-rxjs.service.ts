import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { itemsCardRxjs, prodReview } from 'src/app/models/Generics';
import { Product } from 'src/app/models/Product';
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

  private checkoutValid = new Subject<boolean>();
  checkoutValid$ = this.checkoutValid.asObservable();

  private dataReviews = new Subject<Reviews[]>();
  dataReviews$ = this.dataReviews.asObservable();

  private dataProducts = new Subject<Product[]>();
  dataProducts$ = this.dataProducts.asObservable();

  private dataReview = new Subject<prodReview>();
  dataReview$ = this.dataReview.asObservable();

  private openCloseFavorites = new Subject<boolean>();
  openCloseFavorites$ = this.openCloseFavorites.asObservable();

  private reloadQuestions = new Subject<boolean>();
  reloadQuestions$ = this.reloadQuestions.asObservable();

  crtlItemCardQuantity(value: itemsCardRxjs) {
    this.cartItemsQuantity.next(value);
  }

  crtlOpenCloseMenuCard(value: boolean) {
    this.openCloseMenu.next(value);
  }

  closeFilterModal(value: boolean) {
    this.openCloseFilterModal.next(value);
  }

  crtlCheckoutForm(value: boolean) {
    this.checkoutValid.next(value);
  }

  sendReviews(data: Reviews[]) {
    this.dataReviews.next(data);
  }

  sendProducts(data: Product[]) {
    this.dataProducts.next(data);
  }

  sendRating(data: prodReview) {
    this.dataReview.next(data);
  }

  crtlFavorites(data: boolean) {
    this.openCloseFavorites.next(data);
  }

  questionsReload(evt: boolean) {
    this.reloadQuestions.next(evt);
  }

}
