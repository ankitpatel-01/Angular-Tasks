import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTemplateRoutingModule } from './ng-template-routing.module';
import { NgTemplateComponent } from './ng-template.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NgTemplateComponent
  ],
  imports: [
    CommonModule,
    NgTemplateRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class NgTemplateModule { }
