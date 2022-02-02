import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { MyformComponent } from './components/myform/myform.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    MyformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class MyReactiveFormsModule { }
