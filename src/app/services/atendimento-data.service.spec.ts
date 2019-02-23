import { TestBed, inject } from '@angular/core/testing';

import { AtendimentoDataService } from './atendimento-data.service';

describe('AtendimentoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtendimentoDataService]
    });
  });

  it('should be created', inject([AtendimentoDataService], (service: AtendimentoDataService) => {
    expect(service).toBeTruthy();
  }));
});
