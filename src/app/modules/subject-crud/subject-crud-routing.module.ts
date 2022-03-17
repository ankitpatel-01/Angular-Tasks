import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectCrudComponent } from './subject-crud.component';

const routes: Routes = [{ path: '', component: SubjectCrudComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectCrudRoutingModule { }
