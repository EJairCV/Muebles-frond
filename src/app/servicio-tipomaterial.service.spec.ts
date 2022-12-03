import { TestBed } from '@angular/core/testing';

import { ServicioTipomaterialService } from './servicio-tipomaterial.service';

describe('ServicioTipomaterialService', () => {
  let service: ServicioTipomaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTipomaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
