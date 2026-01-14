import { Component,ViewEncapsulation , Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA,NgModule  } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { isPlatformBrowser,CommonModule} from '@angular/common'
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-image-swiper',
  imports: [CommonModule,RouterLink],
  templateUrl: './image-swiper.html',
  styleUrl: './image-swiper.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ImageSwiper {
 constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      register();
    }
  }

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
      title: 'High Voltage Impulse Resistors',
      subtitle: 'Custom Built',
      link: '/impulse-resistor'
    }
    ,
    {
      image: '/assets/images/ind2.jfif',
      title: 'High Voltage Impulse Inductors',
      subtitle: 'Custom Built',
      link: '/impulse-inductor'
    },
    {
      image: '/assets/images/prd11.jfif',
      title: 'Custom HV Lab Design',
      subtitle: 'From concept to commissioning',
      link: '/services'
    }
    
  ];

}
