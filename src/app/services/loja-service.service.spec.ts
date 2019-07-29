import { TestBed } from '@angular/core/testing';

import { LojaServiceService } from './loja-service.service';

describe('LojaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LojaServiceService = TestBed.get(LojaServiceService);
    expect(service).toBeTruthy();
  });
});
