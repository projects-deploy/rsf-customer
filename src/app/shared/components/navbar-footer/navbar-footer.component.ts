import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-footer',
  templateUrl: './navbar-footer.component.html',
  styleUrls: ['./navbar-footer.component.scss']
})
export class NavbarFooterComponent {

  @Input() itens_cart: number = 0;
  @Input() ttl_favorites: number = 0;

  @Output() cartMenuClose: any = new EventEmitter<boolean>();

  constructor() { }

  closeCartMenu() {
    this.cartMenuClose.emit(true);
  }
}
