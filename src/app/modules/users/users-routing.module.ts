import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListsComponent } from './users-lists/users-lists.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component:UsersListsComponent,
    // children:[
    //   {
    //     path:'',component:UsersListsComponent
    //   },
    //   {
    //     path: 'user-list', component:UsersListsComponent
    //   },
    //   {
    //     path: 'add', component:UsersFormComponent
    //   }
    // ]
  },
  {
    path: 'user-list', component:UsersListsComponent
  },
  {
    path: 'add', component:UsersFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
