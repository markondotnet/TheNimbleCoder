import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';

export const routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class LandingModule {
  static routes = routes;
}
