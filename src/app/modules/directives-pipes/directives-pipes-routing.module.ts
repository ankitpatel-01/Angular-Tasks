import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';
import { PageViewComponent } from './components/page-view/page-view.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';

const routes: Routes = [
  {
    path: '', component: PageViewComponent,
    children: [
      {
        path: '', component: ProductsTableComponent
      },
      {
        path: "curreny-table", component: CurrencyTableComponent
      },
      {
        path: "product-table", component: ProductsTableComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesPipesRoutingModule { }
