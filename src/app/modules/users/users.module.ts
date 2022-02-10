import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListsComponent } from './users-lists/users-lists.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { DeptFilterPipe } from './pipes/dept-filter.pipe';
import { UserFilterPipe } from './pipes/user-filter.pipe';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersListsComponent,
    UsersFormComponent,
    DeptFilterPipe,
    UserFilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }
