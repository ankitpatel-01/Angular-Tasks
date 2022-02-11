import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListsComponent } from './users-lists/users-lists.component';

const routes: Routes = [
  {
    path: '', redirectTo:'user-list', pathMatch:'full'
  },
  {
    path: 'user-list', component:UsersListsComponent
  },
  {
    path: 'add', component:UsersFormComponent
  },
  { path: 'edit/:id', component: UsersFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
