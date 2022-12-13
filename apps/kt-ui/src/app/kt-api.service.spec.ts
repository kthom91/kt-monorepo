import { TestBed } from '@angular/core/testing';

import { KtApiService } from './kt-api.service';

describe('KtApiService', () => {
  let service: KtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
