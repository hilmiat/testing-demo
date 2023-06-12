import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  idUser: string | null = '';
  dataUser = [
    {id: 1, nama: 'Rizki', alamat: 'Jl. Raya Bogor'},
    {id: 2, nama: 'Rizka', alamat: 'Jl. Raya Bogor'},
    {id: 3, nama: 'Rizku', alamat: 'Jl. Raya Bogor'},
  ];
  constructor(private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(parameter=>{
      let id = parameter.get('id');
      console.log(id);
      this.idUser = id;
    });
    console.log('Di dalam on init....');
    // console.log(this.router.snapshot.paramMap.get('id'));
    // this.idUser = this.router.snapshot.paramMap.get('id');
  }
  getDetailUser(){
    let idDicari = parseInt(this.idUser || '');
    let data = this.dataUser.filter(user=>user.id == idDicari);
    return data[0].nama;
  }

}
