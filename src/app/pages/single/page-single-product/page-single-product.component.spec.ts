import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSingleProductComponent } from './page-single-product.component';

describe('PageSingleProductComponent', () => {
  let component: PageSingleProductComponent;
  let fixture: ComponentFixture<PageSingleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageSingleProductComponent]
    });
    fixture = TestBed.createComponent(PageSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
