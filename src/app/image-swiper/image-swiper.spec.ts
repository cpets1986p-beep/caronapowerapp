import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSwiper } from './image-swiper';

describe('ImageSwiper', () => {
  let component: ImageSwiper;
  let fixture: ComponentFixture<ImageSwiper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSwiper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSwiper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
