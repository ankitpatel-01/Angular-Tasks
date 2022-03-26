import { TestBed } from '@angular/core/testing';

import { FilterFormPresenterService } from './filter-form-presenter.service';

describe('FilterFormPresenterService', () => {
  let service: FilterFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
