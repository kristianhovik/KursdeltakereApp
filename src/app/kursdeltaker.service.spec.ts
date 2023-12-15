import { TestBed } from '@angular/core/testing';

import { KursdeltakerService } from './kursdeltaker.service';

describe('KursdeltakerService', () => {
  let service: KursdeltakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KursdeltakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
