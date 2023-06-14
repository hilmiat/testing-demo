import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { CekLevelGuard } from './cek-level';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserFormComponent,
    UserListComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers:[UsersService,CekLevelGuard]
})
export class UsersModule { }
