import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExaSharedLibModule } from './components/shared-lib.module';
import {
  CarouselModule,
  WavesModule,
  NavbarModule,
  ButtonsModule,
  IconsModule
} from 'angular-bootstrap-md';

const angularBootstrap = [
  CarouselModule,
  WavesModule,
  NavbarModule,
  ButtonsModule,
  IconsModule
];

@NgModule({
  imports: [
    CommonModule,
    ...angularBootstrap
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ExaSharedLibModule,
    ...angularBootstrap
    ]
})
export class SharedModule { }
