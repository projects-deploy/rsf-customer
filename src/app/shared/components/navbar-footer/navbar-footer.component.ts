import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-navbar-footer',
  templateUrl: './navbar-footer.component.html',
  styleUrls: ['./navbar-footer.component.scss']
})
export class NavbarFooterComponent implements OnInit {

  @Input() itens_cart: number = 0;
  @Input() ttl_favorites: number = 0;
  @Output() closeFavoritesModal: any = new EventEmitter<boolean>();

  local_str = JSON.parse(`${localStorage.getItem(('rsf-cart'))}`) || 0;

  constructor(
    private rxjs: DataRxjsService
  ) {
    if (this.local_str.length > 0) {
      this.itens_cart = this.local_str.length;
    } else {
      localStorage.setItem('rsf-cart', JSON.stringify([]));
    }
  }

  ngOnInit(): void {
    this.rxjs.cartItemsQuantity$.subscribe(value => {
      this.itens_cart = value.qtde_items;
    });
  }

  crtlFavoriteModal() {
    this.closeFavoritesModal.emit(true);
  }
}
