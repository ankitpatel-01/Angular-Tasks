import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesPipesRoutingModule } from './directives-pipes-routing.module';
import { PageViewComponent } from './components/page-view/page-view.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageViewComponent,
    CurrencyTableComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    DirectivesPipesRoutingModule,
    SharedModule
  ]
})
export class DirectivesPipesModule { }
