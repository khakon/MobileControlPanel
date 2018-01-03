import { TestBed, inject } from '@angular/core/testing';

import { LogOrdersService } from './log-orders.service';

describe('LogOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogOrdersService]
    });
  });

  it('should be created', inject([LogOrdersService], (service: LogOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
