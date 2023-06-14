import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';
import { User } from '../user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  dataUser:Observable<User[]> | undefined;
  //untuk menggunakan service, kita harus inject service tersebut ke dalam constructor
  constructor(private serviceUser: UsersService, private userApi: UsersApiService) { }

  ngOnInit(): void {
    //minta data user ke service
    //isi ke property dataUser
    // this.dataUser = this.serviceUser.getAllUser();

    this.dataUser = this.userApi.getAllUser();

    // this.userApi.getAllUser().subscribe(data=>{
    //   this.dataUser = data.map(user=>{
    //     return {
    //       id: user.id,
    //       nama: user.name,
    //       alamat: user.address.street
    //     }
    //   });
    // });
  }

  deleteUser(id:number){
    // this.serviceUser.deleteUser(id);
    this.userApi.deleteUser(id).subscribe(response=>{
      console.log(response);
    });
  }
}
