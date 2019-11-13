import { TestBed } from '@angular/core/testing';

import { UsuarioModelService } from './usuario-model.service';

describe('UsuarioModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioModelService = TestBed.get(UsuarioModelService);
    expect(service).toBeTruthy();
  });
});
