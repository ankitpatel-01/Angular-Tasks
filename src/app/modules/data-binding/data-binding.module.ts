import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { PageViewComponent } from './page-view.component';
import { BindingComponent } from './components/binding/binding.component';
import { ComnunicationComponent } from './components/comnunication/comnunication.component';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './components/comnunication/child1/child1.component';
import { Child2Component } from './components/comnunication/child2/child2.component';


@NgModule({
  declarations: [
    PageViewComponent,
    BindingComponent,
    ComnunicationComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
