import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMvpRoutingModule } from './user-mvp-routing.module';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { FilterFormPresentationComponent } from './user-list-container/user-list-presentation/filter-form-presentation/filter-form-presentation.component';


@NgModule({
  declarations: [
    UserListContainerComponent,
    UserFormContainerComponent,
    UserListPresentationComponent,
    UserFormPresentationComponent,
    FilterFormPresentationComponent,
  ],
  imports: [
    CommonModule,
    UserMvpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    SharedModule
  ],
  providers:[
    UserService
  ]
})
export class UserMvpModule { }
