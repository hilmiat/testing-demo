import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],

})
export class UserFormComponent implements OnInit {
  user:{name:string,phone:string,email:string,id:number} = {id:0,name:'',phone:'',email:''};
  isEdit = false;
  constructor(private userApi:UsersApiService, private route:ActivatedRoute, private userService: UsersService) { }
  ngOnInit(): void {
    //cek apakah ada parameter id di url
    // this.route.paramMap.subscribe(
    //   (params) => {
    //     let id = params.get('id');
    //     if(id){
    //       this.isEdit = true;
    //       this.userApi.getUserById(parseInt(id)).subscribe(
    //         userdariAPI => {
    //           this.user = userdariAPI;
    //         }
    //       );
    //     }
    //   }
    // );
    this.route.params.pipe(
      switchMap((params: Params) => {
        let id = params['id'];
        if(id){
          this.isEdit = true;
          return this.userApi.getUserById(parseInt(id));
        }
          return [];
        }
      )
    ).subscribe(
      userdariAPI => {
        this.user = userdariAPI;
      }
    );
            
    //jika ada, maka panggil method getUserById
    
  }
  saveUser() {
    this.userService.addUser({
      id: this.user.id,
      nama: this.user.name,
      alamat: this.user.email
    });
    // this.userApi.createUser(this.user).subscribe(
    //   (response:any) => {
    //     console.log(response);
    //   }
    // );
  }
  updateUser() {
    this.userApi.updateUser(this.user.id,this.user).subscribe(
      (response:any) => {
        console.log(response);
      }
    );
  }

}
