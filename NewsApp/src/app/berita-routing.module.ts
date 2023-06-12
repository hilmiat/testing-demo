import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailBeritaComponent } from './berita/detail-berita/detail-berita.component';
import { FormBeritaComponent } from './berita/form-berita/form-berita.component';
import { ListBeritaComponent } from './berita/list-berita/list-berita.component';
import { RouterModule } from '@angular/router';

const beritaRoute = [
  { path: 'berita', component: ListBeritaComponent },
  { path: 'berita/:id', component: DetailBeritaComponent },
  { path: 'berita/:id/edit', component: FormBeritaComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(beritaRoute)
  ],
  exports: [RouterModule]
})
export class BeritaRoutingModule { }
