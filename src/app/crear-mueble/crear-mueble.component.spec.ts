import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMuebleComponent } from './crear-mueble.component';

describe('CrearMuebleComponent', () => {
  let component: CrearMuebleComponent;
  let fixture: ComponentFixture<CrearMuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
