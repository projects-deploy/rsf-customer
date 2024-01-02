import { TestBed } from '@angular/core/testing';

import { SizeWindowService } from './size-window.service';

describe('SizeWindowService', () => {
  let service: SizeWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
