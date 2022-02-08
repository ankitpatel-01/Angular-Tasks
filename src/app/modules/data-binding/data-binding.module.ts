import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { PageViewComponent } from './page-view.component';
import { BindingComponent } from './components/binding/binding.component';
import { ComnunicationComponent } from './components/comnunication/comnunication.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageViewComponent,
    BindingComponent,
    ComnunicationComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
