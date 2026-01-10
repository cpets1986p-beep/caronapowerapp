import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpulseResistor } from './impulse-resistor';

describe('ImpulseResistor', () => {
  let component: ImpulseResistor;
  let fixture: ComponentFixture<ImpulseResistor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpulseResistor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpulseResistor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
