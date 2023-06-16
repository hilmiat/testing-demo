import { Component, OnInit, PipeTransform } from '@angular/core';
import { UsersService } from '../users.service';
import { UsersApiService } from '../users-api.service';
import { User } from '../user.interface';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit {
  searchText = new FormControl('');
  dataUser:Observable<any[]> | undefined;
  page = 1;
  pageSize = 4;
  // collectionSize = 0;
  //untuk menggunakan service, kita harus inject service tersebut ke dalam constructor
  constructor(private serviceUser: UsersService, private userApi: UsersApiService) {
    // this.searchText.valueChanges.subscribe(value=>{
    //   console.log(value);
    // })
    this.searchText.valueChanges.subscribe(value=>{
      this.dataUser = this.search(value || '');
    });
  }
  search(text:string){
    return this.userApi.searchUser(text);
  }
  onSort(e: any){
    console.log(e);
  }

  // search(text:string, pipe: PipeTransform): any[]{
  //   // return this.dataUser.filter(user=>{
  //   //   const term = text.toLowerCase();
  //   //   return user.name.toLowerCase().includes(term);
  //   // });
  // }

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
