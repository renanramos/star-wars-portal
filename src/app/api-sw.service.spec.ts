import { TestBed } from '@angular/core/testing';

import { ApiSwService } from './api-sw.service';

describe('ApiSwService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiSwService = TestBed.get(ApiSwService);
    expect(service).toBeTruthy();
  });
});
