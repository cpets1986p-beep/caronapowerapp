import { Component } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
@Component({
  selector: 'app-image-slider',
  imports: [CommonModule,RouterLink],
  templateUrl: './image-slider.html',
  styleUrl: './image-slider.css',
})
export class ImageSlider {
slides = [
    {
      image: '/assets/images/prd8.jfif',
      title: 'Welcome to Carona Power',
      subtitle: 'High Voltage Impulse Generator Service & Spares Support',
      link: '/products'
    },
    {
      image: '/assets/images/prd9.jfif',
      title: 'Trusted by Industry Leaders',
      subtitle: 'Delivering excellence in HV labs',
      link: '/home'
    },
    {
      image: '/assets/images/resistorImp.jfif',
      title: 'Custom HV Lab Design',
      subtitle: 'From concept to commissioning',
      link: '/services'
    }
    ,
    {
      image: '/assets/images/prd11.jfif',
      title: 'Custom HV Lab Design',
      subtitle: 'From concept to commissioning',
      link: '/services'
    }
  ];

  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5 seconds
  }
  ngOnDestroy() {
    // Clear interval when component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
  this.currentSlide = index;
}

}
