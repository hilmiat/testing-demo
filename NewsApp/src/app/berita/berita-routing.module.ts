import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailBeritaComponent } from './detail-berita/detail-berita.component';
import { FormBeritaComponent } from './form-berita/form-berita.component';
import { ListBeritaComponent } from './list-berita/list-berita.component';
import { RouterModule } from '@angular/router';
import { BeritaComponent } from './berita/berita.component';

const beritaRoute = [
  { path: 'berita', component: BeritaComponent, children: [
    { path: '', component: ListBeritaComponent },
    { path: ':id', component: DetailBeritaComponent },
    { path: ':id/edit', component: FormBeritaComponent },
  ]}
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
