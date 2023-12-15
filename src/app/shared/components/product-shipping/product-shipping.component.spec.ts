import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShippingComponent } from './product-shipping.component';

describe('ProductShippingComponent', () => {
  let component: ProductShippingComponent;
  let fixture: ComponentFixture<ProductShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShippingComponent]
    });
    fixture = TestBed.createComponent(ProductShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
