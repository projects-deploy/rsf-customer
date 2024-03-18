import { TestBed } from '@angular/core/testing';

import { NotifyArrivalService } from './notify-arrival.service';

describe('NotifyArrivalService', () => {
  let service: NotifyArrivalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyArrivalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
