import { TestBed } from '@angular/core/testing';

import { MunicipioModelService } from './municipio-model.service';

describe('MunicipioModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MunicipioModelService = TestBed.get(MunicipioModelService);
    expect(service).toBeTruthy();
  });
});
