import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWhriteReviewComponent } from './product-whrite-review.component';

describe('ProductWhriteReviewComponent', () => {
  let component: ProductWhriteReviewComponent;
  let fixture: ComponentFixture<ProductWhriteReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWhriteReviewComponent]
    });
    fixture = TestBed.createComponent(ProductWhriteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
