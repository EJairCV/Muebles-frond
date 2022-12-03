import { TestBed } from '@angular/core/testing';

import { ServicioMueblesService } from './servicio-muebles.service';

describe('ServicioMueblesService', () => {
  let service: ServicioMueblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMueblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
