import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MytitlecasePipe } from './pipes/mytitlecase.pipe';
import { BoolenConverterPipe } from './pipes/boolen-converter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { GenderPipe } from './pipes/gender.pipe';
import { DeptFilterPipe } from './pipes/dept-filter.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';
import { PaginateComponent } from './components/paginate/paginate.component';
import { MaskPhonePipe } from './pipes/mask-phone.pipe';
import { MaskPhoneDirective } from './directives/mask-phone.directive';


@NgModule({
  declarations: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective,
    GenderPipe,
    DeptFilterPipe,
    PaginatePipe,
    PaginateComponent,
    MaskPhonePipe,
    MaskPhoneDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MytitlecasePipe,
    BoolenConverterPipe,
    HighlightDirective,
    GenderPipe,
    DeptFilterPipe,
    PaginatePipe,
    PaginateComponent,
    MaskPhonePipe,
    MaskPhoneDirective,
  ]
})
export class SharedModule { }
