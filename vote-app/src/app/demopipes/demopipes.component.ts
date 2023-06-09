import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {
  stringPanjang = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.';
  angka = 2.718281828459045;
  tanggal = new Date();
  dataSiswa: any[] = [
    {
      nama: 'Andi',
      kelas: '1A'
    },
    {
      nama: 'Budi',
      kelas: '2B'
    },
    {
      nama: 'Caca',
      kelas: '3C'
    },
    {
      nama: 'Deni',
      kelas: '4D'
    },
    {
      nama: 'Euis',
      kelas: '5E'
    }
  ]
  title: any;
  tanggalLahir: any;
namacari: any;
  constructor() { }

  ngOnInit(): void {
  }

}
