import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorRegistrationComponent } from './favor-registration.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'newFavor',
    component: FavorRegistrationComponent,
    children: [
      {
        path:'', component: FavorRegistrationComponent   }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NeighborhoodModule,
    ReactiveFormsModule
  ],
  declarations: [FavorRegistrationComponent],
  exports: [FavorRegistrationComponent]
})
export class FavorRegistrationModule { }