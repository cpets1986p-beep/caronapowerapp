import { Component } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './products.html',
  styleUrl: './products.css'
})

export class Products {
  isInductor: boolean =false;
  img=[
    '/assets/images/resistor.jpg'
  ]
  imgr=[
    '/assets/images/prd3.jpg'
  ]
  images=[
    '/assets/images/prd1.jfif',
    '/assets/images/prd2.jfif',
    '/assets/images/prd3.jfif',
    '/assets/images/prd4.jfif',
    '/assets/images/prd5.jfif',
    '/assets/images/prd6.jfif',
    '/assets/images/prd7.jfif',
    '/assets/images/prd8.jfif',
    '/assets/images/prd9.jfif',
    '/assets/images/prd10.jfif'
  ]
}
