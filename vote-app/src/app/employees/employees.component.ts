import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  hasilVote: string = '';
  voting: number[] = [];

  bacaVote($event: number) {
    //jika negatif, maka hapus dari array
    if ($event < 0) {
      this.voting = this.voting.filter((e) => {
        return e !== -$event;
      });
    }else{
      //jika positif, maka tambahkan ke array
      this.voting.push($event);
    }
    console.log(this.voting);
    //filter data employeesdata berdasarkan id yang ada di array voting
    let employee = this.employeesdata.filter((e) => {
      return this.voting.includes(e.id);
    });
    //tampilkan semua nama yang ada di array employee
    this.hasilVote = employee.map((e) => {
      return e.name;
    }
    ).join(', ');
  }
  employeesdata = [
    {
      name: 'John',
      age: 25,
      id: 1,
      photoUrl:'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'Mary',
      age: 30,
      id: 2,
      photoUrl:'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      name: 'Mike',
      age: 28,
      id: 3,
      photoUrl:'https://angular.io/assets/images/logos/angular/angular.png'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
