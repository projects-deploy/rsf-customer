import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCustomComponent } from './product-custom.component';

describe('ProductCustomComponent', () => {
  let component: ProductCustomComponent;
  let fixture: ComponentFixture<ProductCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCustomComponent]
    });
    fixture = TestBed.createComponent(ProductCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
