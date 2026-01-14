import { Component, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA,NgModule  } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { CapitalizeFirstPipe } from '../shared/pipes/capitalize-first.pipe';
import { ImageSlider } from '../image-slider/image-slider';
import { ImageSwiper } from '../image-swiper/image-swiper';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ImageSwiper, CapitalizeFirstPipe],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {
  images = [
    {
      ID: 1,
      Src:'/assets/images/prd8.jfif'
    } 
    ,
     {
      ID:2,
      Src:'/assets/images/prd9.jfif'
     },{
      ID:3,
      Src:'/assets/images/resistorImp.jfif'
     },{
      ID:4,
      Src:'/assets/images/prd11.jfif'
     }

  ];

   imagesclnts=[
    '/assets/images/cl1.jfif',
    '/assets/images/cl2.jfif',
    '/assets/images/cl6.jfif',
    '/assets/images/cl4.jfif',
    '/assets/images/cl5.jfif',
    '/assets/images/cl3.jfif'
   ]
   
  products = [
    { name: 'Impulse Resistors', image: '/assets/images/prd1.jfif' },
    { name: 'Impulse Inductors', image: '/assets/images/prd2.jfif' },
    { name: 'Impulse Generator Spares', image: '/assets/images/prd3.jfif' },
    { name: 'PD Rooms', image: '/assets/images/prd4.jfif' }
  ];

  serivces = [
    {name:'HV System Maintenance',image: '/assets/images/prd1.jfif'},
    { name: 'Troubleshooting & Repair', image: '/assets/images/prd1.jfif' },
    { name: 'HV Laboratory Planning', image: '/assets/images/prd2.jfif' },
    { name: 'HV Laboratory Grounding System Design', image: '/assets/images/prd2.jfif' },
    
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      register();
    }
  }

  
}
