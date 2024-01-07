import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByMenuComponent } from './product-by-menu.component';

describe('ProductByMenuComponent', () => {
  let component: ProductByMenuComponent;
  let fixture: ComponentFixture<ProductByMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductByMenuComponent]
    });
    fixture = TestBed.createComponent(ProductByMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
