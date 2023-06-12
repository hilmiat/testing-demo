import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataUser = [
    {id: 1, nama: 'Rizki', alamat: 'Jl. Raya Bogor'},
    {id: 2, nama: 'Rizka', alamat: 'Jl. Raya Bogor'},
    {id: 3, nama: 'Rizku', alamat: 'Jl. Raya Bogor'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
