import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';

import { from } from 'rxjs';
import { ProfileFormComponent } from './profile-form/profile-form.component';


@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class MyReactiveFormsModule { }
