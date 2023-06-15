import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersApiService } from './users-api.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  username: string | null = '';
  constructor(private route: ActivatedRoute, private userApi: UsersApiService, private router:Router) { }

  ngOnInit(): void {
    // this.username = this.route.snapshot.paramMap.get('username');
    this.route.paramMap.subscribe(parameter=>{
      this.username = parameter.get('username');
    });
    //membaca parameter dari url
    // this.route.queryParamMap.subscribe(parameter=>{
    //   console.log(parameter.get('cari'));
    // });
    this.route.queryParams.subscribe(parameter=>{
      console.log(parameter);
    });
    //membaca fragment dari url
    this.route.fragment.subscribe(parameter=>{
      console.log(parameter);
    });
  }

  //test post data user
  buatUser(){
    // let data = {
    //   name: 'Fulan',
    //   username: 'fulan',
    //   email: 'email@mail.com'
    // };
    // this.userApi.createUser(data).subscribe(data=>{
    //   console.log(data);
    // });
    this.router.navigate(['users','create']);
  }

  testObservable(){
    const myObservable = of('satu','dua','tiga');

    myObservable.subscribe(data=>{
      console.log(data);
    });

    myObservable.subscribe({
      next: data=>{console.log(data)},
      error: err=>{console.log(err)},
      complete: ()=>{console.log('complete')}
    });
  }

}
