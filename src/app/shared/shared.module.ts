import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytitlecasePipe } from './pipes/mytitlecase.pipe';
import { BoolenConverterPipe } from './pipes/boolen-converter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { GenderPipe } from './pipes/gender.pipe';
import { DeptFilterPipe } from './pipes/dept-filter.pipe';


@NgModule({
  declarations: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective,
    GenderPipe,
    DeptFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective,
    GenderPipe,
    DeptFilterPipe
  ]
})
export class SharedModule { }
