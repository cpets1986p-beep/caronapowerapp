import { Component,HostListener  } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { CapitalizeFirstPipe } from '../shared/pipes/capitalize-first.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive,CommonModule,RouterLink, CapitalizeFirstPipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
 isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10; // threshold for shadow + blur
  }


//   constructor(private viewportScroller: ViewportScroller) {}
//   showHeader: boolean = true;
// selectedItem: string | null = null;

  // public scrollToSection(sectionId: string): void {
  //   const element = document.getElementById(sectionId)!;
  //   const navElement = document.getElementsByTagName('header')[0]!;

  //   const navHeight = navElement.offsetHeight;

  //   const targetPosition = element.getBoundingClientRect().top + window.scrollY;

  //   this.viewportScroller.scrollToPosition([0, targetPosition - navHeight]);
  // }
}
