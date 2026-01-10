import { Component, Inject, PLATFORM_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { CapitalizeFirstPipe } from '../shared/pipes/capitalize-first.pipe';
import { ImageSlider } from '../image-slider/image-slider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ImageSlider, CapitalizeFirstPipe],
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
    { name: 'Impulse Generator', image: '/assets/images/prd1.jfif' },
    { name: 'AC Test Set', image: '/assets/images/prd2.jfif' },
    { name: 'PD Kit', image: '/assets/images/prd3.jfif' },
    { name: 'HV Divider', image: '/assets/images/prd4.jfif' },
    { name: 'Resonant Test System', image: '/assets/images/prd5.jfif' },
    { name: 'Transformer Test Bench', image: '/assets/images/prd6.jfif' },
    { name: 'Transformer Test Bench', image: '/assets/images/prd7.jfif' },
    { name: 'Transformer Test Bench', image: '/assets/images/prd8.jfif' },
    { name: 'Transformer Test Bench', image: '/assets/images/prd9.jfif' },
        { name: 'Transformer Test Bench', image: '/assets/images/prd10.jfif' },
  ];
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      register();
    }
  }
}
