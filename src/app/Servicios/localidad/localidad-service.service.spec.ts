import { TestBed } from '@angular/core/testing';

import { LocalidadServiceService } from './localidad-service.service';

describe('LocalidadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalidadServiceService = TestBed.get(LocalidadServiceService);
    expect(service).toBeTruthy();
  });
});
