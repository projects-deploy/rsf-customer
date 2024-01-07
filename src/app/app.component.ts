import { Component } from '@angular/core';
import { CustomersService } from './services/customers/customers.service';
import { SizeWindowService } from './shared/services/size-window/size-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rsf-customer';

  constructor(
    private size: SizeWindowService,
    private custService: CustomersService
  ) {
    custService.customerById(1).subscribe({
      next: (data) => {
        localStorage.setItem('rsf-customer', JSON.stringify(data));
      },
      error: (err) => {
        console.log('ERRO AO BUSCAR USÁRIO');
      }
    });
  }
}
