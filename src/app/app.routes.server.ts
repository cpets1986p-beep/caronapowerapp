import { RenderMode, ServerRoute } from '@angular/ssr';
import { Header } from './header/header';
import { Home } from './home/home';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];