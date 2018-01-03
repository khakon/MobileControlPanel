import { TestBed, inject } from '@angular/core/testing';

import { LogPaymentsService } from './log-payments.service';

describe('LogPaymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogPaymentsService]
    });
  });

  it('should be created', inject([LogPaymentsService], (service: LogPaymentsService) => {
    expect(service).toBeTruthy();
  }));
});
