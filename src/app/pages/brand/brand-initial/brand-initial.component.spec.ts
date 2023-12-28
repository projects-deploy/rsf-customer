import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandInitialComponent } from './brand-initial.component';

describe('BrandInitialComponent', () => {
  let component: BrandInitialComponent;
  let fixture: ComponentFixture<BrandInitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandInitialComponent]
    });
    fixture = TestBed.createComponent(BrandInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
