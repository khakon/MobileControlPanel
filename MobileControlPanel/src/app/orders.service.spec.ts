import { TestBed, inject } from '@angular/core/testing';

import { OrdersHttpService } from './orders.service';

describe('OrdersHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdersHttpService]
    });
  });

  it('should be created', inject([OrdersHttpService], (service: OrdersHttpService) => {
    expect(service).toBeTruthy();
  }));
});
