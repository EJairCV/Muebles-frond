import { TestBed } from '@angular/core/testing';

import { ServicioTipomuebleService } from './servicio-tipomueble.service';

describe('ServicioTipomuebleService', () => {
  let service: ServicioTipomuebleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTipomuebleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
