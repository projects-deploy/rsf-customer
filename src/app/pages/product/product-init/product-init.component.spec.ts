import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInitComponent } from './product-init.component';

describe('ProductInitComponent', () => {
  let component: ProductInitComponent;
  let fixture: ComponentFixture<ProductInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductInitComponent]
    });
    fixture = TestBed.createComponent(ProductInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
