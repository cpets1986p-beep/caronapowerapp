import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {  AppRoutingModule } from './app.routes';
@NgModule({
  imports: [
    MatCardModule,
        MatIcon,
    AppRoutingModule
  ]
})
export class AppModule {}

