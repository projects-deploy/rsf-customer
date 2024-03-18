import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerForgotComponent } from './customer-forgot.component';

describe('CustomerForgotComponent', () => {
  let component: CustomerForgotComponent;
  let fixture: ComponentFixture<CustomerForgotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerForgotComponent]
    });
    fixture = TestBed.createComponent(CustomerForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
