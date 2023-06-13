import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  idUser: string | null = '';
  detailUser: any;
  //tambahkan DI untuk service user
  constructor(private router:ActivatedRoute, private serviceUser: UsersService, private userApi:UsersApiService ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(parameter=>{
      let id = parameter.get('id');
      console.log(id);
      this.idUser = id;
      this.getDetailUser();
    });
    console.log('Di dalam on init....');
    
    // console.log(this.router.snapshot.paramMap.get('id'));
    // this.idUser = this.router.snapshot.paramMap.get('id');
  }
  getDetailUser(){
    let idDicari = parseInt(this.idUser || '');
    //get user by id
    // let data = this.serviceUser.getUserById(idDicari);
    // if(!data){
    //   return 'User tidak ditemukan';
    // }else{
    //   return data.nama;
    // }
    this.userApi.getUserById(idDicari).subscribe(data=>{
      // console.log('DATA DETAIL USER>>',data);
      this.detailUser = data.name;
    });
  }

}
