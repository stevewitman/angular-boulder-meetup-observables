import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'x00', component: X00 },
  { path: 'x01', component: X01 },
  { path: 'x02', component: X02 },
  { path: 'x03', component: X03 },
  { path: 'x04', component: X04 },
  { path: 'x05', component: X05 },
  { path: 'x06', component: X06 },
  { path: 'x07', component: X07 },
  { path: 'x08', component: X08 },
  { path: 'x09', component: X09 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
