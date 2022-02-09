import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "data-binding",
    loadChildren: () =>
      import('./modules/data-binding/data-binding.module').then((m) => m.DataBindingModule)
  },
  {
    path: "directive-pipes",
    loadChildren: () =>
      import('./modules/directives-pipes/directives-pipes.module').then((m) => m.DirectivesPipesModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: 'resumebuilder',
    loadChildren: () =>
      import('./modules/resume-builder/resume-builder.module').then(
        (m) => m.ResumeBuilderModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
