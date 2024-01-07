import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInitialComponent } from './category-initial.component';

describe('CategoryInitialComponent', () => {
  let component: CategoryInitialComponent;
  let fixture: ComponentFixture<CategoryInitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryInitialComponent]
    });
    fixture = TestBed.createComponent(CategoryInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
