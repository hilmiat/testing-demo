import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CekLevelGuard } from './cek-level';

const routes: Routes = [{
  path: 'users',component: UsersComponent, children: [
    {path:"", component: UserListComponent},
    {path:"create", component: UserFormComponent, canActivate: [CekLevelGuard]},
    {path:":id", component: UserDetailComponent},
    {path:":id/edit", component: UserFormComponent, canActivate: [CekLevelGuard]}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
