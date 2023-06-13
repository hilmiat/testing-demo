import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';


const KonfigurasiRoute = [
  { path: 'home', redirectTo:'berita' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(KonfigurasiRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
