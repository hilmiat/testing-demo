import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username: string | null = '';
  constructor(private route: ActivatedRoute) { }

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

}
