import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpulseInductor } from './impulse-inductor';

describe('ImpulseInductor', () => {
  let component: ImpulseInductor;
  let fixture: ComponentFixture<ImpulseInductor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpulseInductor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpulseInductor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
