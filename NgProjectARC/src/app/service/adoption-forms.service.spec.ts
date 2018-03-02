import { TestBed, inject } from '@angular/core/testing';

import { AdoptionFormsService } from './adoption-forms.service';

describe('AdoptionFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdoptionFormsService]
    });
  });

  it('should be created', inject([AdoptionFormsService], (service: AdoptionFormsService) => {
    expect(service).toBeTruthy();
  }));
});
