import { TestBed, inject } from '@angular/core/testing';

import { InventarioDataService } from './inventario-data.service';

describe('InventarioDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventarioDataService]
    });
  });

  it('should be created', inject([InventarioDataService], (service: InventarioDataService) => {
    expect(service).toBeTruthy();
  }));
});
