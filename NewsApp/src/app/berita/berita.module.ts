import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeritaComponent } from './berita/berita.component';
import { ListBeritaComponent } from './list-berita/list-berita.component';
import { FormBeritaComponent } from './form-berita/form-berita.component';
import { DetailBeritaComponent } from './detail-berita/detail-berita.component';
import { BeritaRoutingModule } from '../berita-routing.module';



@NgModule({
  declarations: [
    BeritaComponent,
    ListBeritaComponent,
    FormBeritaComponent,
    DetailBeritaComponent
  ],
  imports: [
    CommonModule,
    BeritaRoutingModule
  ]
})
export class BeritaModule { }
