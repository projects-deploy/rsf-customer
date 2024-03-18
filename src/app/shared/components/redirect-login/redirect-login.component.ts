import { Component } from '@angular/core';
import { DataRxjsService } from '../../services/rxjs/data-rxjs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-login',
  templateUrl: './redirect-login.component.html',
  styleUrls: ['./redirect-login.component.scss']
})
export class RedirectLoginComponent {

  constructor(
    private rxjs:DataRxjsService,
    private router: Router
  ) { }

  toLogin() {
    this.rxjs.crtlFavorites(false);
    this.router.navigate(['/customer']);
  }

}
