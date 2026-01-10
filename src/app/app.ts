import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Footer} from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header,Footer,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = 'caronaapp';

  constructor( sanitizer: DomSanitizer) {
   
  }
}
