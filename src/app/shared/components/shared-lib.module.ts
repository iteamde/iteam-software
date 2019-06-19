import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {
  CarouselModule,
  WavesModule,
  NavbarModule,
  ButtonsModule,
  IconsModule
} from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const angularBootstrap = [
  CarouselModule,
  WavesModule,
  NavbarModule,
  ButtonsModule,
  IconsModule
];

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ...angularBootstrap
  ],
})
export class ExaSharedLibModule { }
