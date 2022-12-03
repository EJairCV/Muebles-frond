import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipomaterialComponent } from './tipomaterial.component';

describe('TipomaterialComponent', () => {
  let component: TipomaterialComponent;
  let fixture: ComponentFixture<TipomaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipomaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
