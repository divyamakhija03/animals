import { TestBed } from '@angular/core/testing';

import { InvolvedService } from './involved.service';

describe('InvolvedService', () => {
  let service: InvolvedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvolvedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
