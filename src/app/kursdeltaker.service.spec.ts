import { TestBed } from '@angular/core/testing';

import { ApiService } from './kursdeltaker.service';

describe('KursdeltakerService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
