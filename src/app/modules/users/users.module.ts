import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListsComponent } from './users-lists/users-lists.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormModalComponent } from './form-modal/form-modal.component';


@NgModule({
  declarations: [
    UsersListsComponent,
    UsersFormComponent,
    UserFilterPipe,
    FormModalComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    OverlayModule,
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
