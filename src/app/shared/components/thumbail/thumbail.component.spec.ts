import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbailComponent } from './thumbail.component';

describe('ThumbailComponent', () => {
  let component: ThumbailComponent;
  let fixture: ComponentFixture<ThumbailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThumbailComponent]
    });
    fixture = TestBed.createComponent(ThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
