import { TestBed, inject } from '@angular/core/testing';

import { UsuarioimpDataService } from './usuarioimp-data.service';

describe('UsuarioimpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioimpDataService]
    });
  });

  it('should be created', inject([UsuarioimpDataService], (service: UsuarioimpDataService) => {
    expect(service).toBeTruthy();
  }));
});
