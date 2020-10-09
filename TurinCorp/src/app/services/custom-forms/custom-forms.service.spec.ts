import { TestBed } from '@angular/core/testing';

import { CustomFormsService } from './custom-forms.service';

describe('CustomFormsServiceService', () => {
  let service: CustomFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
