import { Component } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header,Footer,MatIconModule,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'caronaapp';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
    iconRegistry.addSvgIcon('location', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/location.svg'));
  }
}
