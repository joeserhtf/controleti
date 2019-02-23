import { TestBed, inject } from '@angular/core/testing';

import { CustofixoDataService } from './custofixo-data.service';

describe('CustofixoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustofixoDataService]
    });
  });

  it('should be created', inject([CustofixoDataService], (service: CustofixoDataService) => {
    expect(service).toBeTruthy();
  }));
});
