import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BeritaModule } from './berita/berita.module';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    UsersComponent,
    NotFoundComponent,
    UserDetailComponent,
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeritaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
