import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticCrudComponent } from './static-crud.component';

const routes: Routes = [{ path: '', component: StaticCrudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticCrudRoutingModule { }
