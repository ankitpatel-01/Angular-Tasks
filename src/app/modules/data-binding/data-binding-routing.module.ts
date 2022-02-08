import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './components/binding/binding.component';
import { ComnunicationComponent } from './components/comnunication/comnunication.component';
import { PageViewComponent } from './page-view.component';

const routes: Routes = [
  {
    path: '', component: PageViewComponent,
    children: [
      {
        path: '', component: BindingComponent
      },
      {
        path: 'db-ways', component: BindingComponent
      },
      {
        path: 'comp-com', component: ComnunicationComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
