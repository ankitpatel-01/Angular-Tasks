import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactiveForm',
    loadChildren: () =>
      import('./modules/reactive-forms/reactive-forms.module').then(
        (m) => m.MyReactiveFormsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
