import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytitlecasePipe } from './pipes/mytitlecase.pipe';
import { BoolenConverterPipe } from './pipes/boolen-converter.pipe';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
