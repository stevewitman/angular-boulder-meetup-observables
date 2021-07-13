import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { X00 } from './x00.observable-basics.component';
import { X01 } from './x01.more-observable-basics.component';
import { X02 } from './x02.observers.component';
import { X03 } from './x03.imperative-design.component';
import { X04 } from './x04.reactive-design.component';
import { X05 } from './x05.multi-cast.component';
import { X06 } from './x06.cold.component';
import { X07 } from './x07.warm.component';
import { X08 } from './x08.hot.component';
import { X09 } from './x09.subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    X00,
    X01,
    X02,
    X03,
    X04,
    X05,
    X06,
    X07,
    X08,
    X09
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
