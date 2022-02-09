import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeViewComponent } from './resume-view/resume-view.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {path: '', component: UserFormComponent},
  {path: 'view', component:ResumeViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
