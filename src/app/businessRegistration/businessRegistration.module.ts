import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NeighborhoodModule } from '../neighborhood/neighborhood.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BusinessRegistrationComponent } from './businessRegistration.component';
import { ResidentModule } from '../resident/resident.module';

const routes: Routes = [
  {
    path: 'newBusiness',
    component: BusinessRegistrationComponent,
    children: [
      {
        path:'', component: BusinessRegistrationComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NeighborhoodModule,
    ResidentModule,
    ReactiveFormsModule
  ],
  declarations: [BusinessRegistrationComponent],
  exports: [BusinessRegistrationComponent]
})
export class BusinessRegistrationModule { }
