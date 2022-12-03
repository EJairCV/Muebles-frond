import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomuebleComponent } from './tipomueble.component';

describe('TipomuebleComponent', () => {
  let component: TipomuebleComponent;
  let fixture: ComponentFixture<TipomuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipomuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
