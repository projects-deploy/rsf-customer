import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInitComponent } from './customer-init.component';

describe('CustomerInitComponent', () => {
  let component: CustomerInitComponent;
  let fixture: ComponentFixture<CustomerInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerInitComponent]
    });
    fixture = TestBed.createComponent(CustomerInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
