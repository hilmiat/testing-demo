import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],

})
export class UserFormComponent implements OnInit {
  isSubmitting = false;
  user:{name:string,phone:string,email:string,id:number} = {id:0,name:'',phone:'',email:''};
  isEdit = false;
  constructor(
    private userApi:UsersApiService, 
    private route:ActivatedRoute, 
    private userService: UsersService,
    private router: Router
    ) { }
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
    this.isSubmitting = true;
    this.userService.addUser({
      id: this.user.id,
      nama: this.user.name,
      alamat: this.user.email
    });
    this.kembaliKeListUser('Sukses tambah user');
    // this.userApi.createUser(this.user).subscribe(
    //   (response:any) => {
    //     console.log(response);
    //   }
    // );
  }
  updateUser() {
    this.isSubmitting = true;
    this.userApi.updateUser(this.user.id,this.user).subscribe(
      (response:any) => {
        console.log(response);
        this.kembaliKeListUser('Sukses update user '+this.user.name);
      }
    );
  }
  kembaliKeListUser(message:string = '') {
    this.router.navigate(['/users',{pesan:message}]);
  }

}
