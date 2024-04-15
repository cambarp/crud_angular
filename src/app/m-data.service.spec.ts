import { TestBed } from '@angular/core/testing';

import { MDataService } from './m-data.service';

describe('MDataService', () => {
  let service: MDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
