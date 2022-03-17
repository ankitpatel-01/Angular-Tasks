import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectCrudRoutingModule } from './subject-crud-routing.module';
import { SubjectCrudComponent } from './subject-crud.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternsService } from './interns.service';


@NgModule({
  declarations: [
    SubjectCrudComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SubjectCrudRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    InternsService
  ]
})
export class SubjectCrudModule { }
