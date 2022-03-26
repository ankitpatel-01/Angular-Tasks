import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticCrudRoutingModule } from './static-crud-routing.module';
import { StaticCrudComponent } from './static-crud.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { AddInternComponent } from './add-intern/add-intern.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StaticCrudComponent,
    InternListComponent,
    AddInternComponent
  ],
  imports: [
    CommonModule,
    StaticCrudRoutingModule,
    ReactiveFormsModule
  ]
})
export class StaticCrudModule { }
