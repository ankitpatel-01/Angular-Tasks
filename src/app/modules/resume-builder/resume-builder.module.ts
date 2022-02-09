import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { ResumeService } from './service/resume.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserFormComponent,
    ResumeViewComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    ResumeService
  ]
})
export class ResumeBuilderModule { }
