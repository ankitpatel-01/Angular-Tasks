import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytitlecasePipe } from './pipes/mytitlecase.pipe';
import { BoolenConverterPipe } from './pipes/boolen-converter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
