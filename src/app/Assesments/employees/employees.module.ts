import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SupportService } from './services/support.service';
import { EmployeesService } from './services/employees.service';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    SupportService,
    EmployeesService
  ]
})
export class EmployeesModule { }
