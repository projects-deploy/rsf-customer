import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllProductsComponent } from './page-all-products.component';

describe('PageAllProductsComponent', () => {
  let component: PageAllProductsComponent;
  let fixture: ComponentFixture<PageAllProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAllProductsComponent]
    });
    fixture = TestBed.createComponent(PageAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
