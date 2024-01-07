import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  @Input() mobile_menu_cat: any[] = [];
  @Input() mobile_menu_dpt: any[] = [];
  @Input() mobile_menu_bnd: any[] = [];

  @Output() cartMenuClose: any = new EventEmitter<boolean>();

  constructor(
    private route: Router,
    private rxjs: DataRxjsService,
  ) { }

  ngOnInit(): void {
  }

  goToRouter(item: any, flag: string) {
    this.route.navigate(
      [`/${flag}`],
      { queryParams: { s: item.name_link, q: item.id } }
    );
    this.rxjs.closeFilterModal(false);
    this.rxjs.crtlOpenCloseMenuCard(false);
  }

}
