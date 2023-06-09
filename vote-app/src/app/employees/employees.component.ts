import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit,OnChanges {
  emplcari: any;
  trackByEmpId(index: number, employee: any): number {
    return employee.id;
  }
  updateEmployee(arg0: number) {
    //update employeesdate berdasarkan id
    this.employeesdata = this.employeesdata.map(
      (e) => {
        if (e.id === arg0) {
          e.name = e.name + ' Updated';
        }
        return e;
      }
    );
  }

  addEmployee() {
    //tambahkan data baru ke array employeesdata
    this.employeesdata.push(
      {
        name: 'New Employee',
        age: 25,
        id: this.employeesdata.length + 1,
        photoUrl:'https://angular.io/assets/images/logos/angular/angular.png'
      }
    );
  }

  hasilVote: string = '';
  voting: number[] = [];
  disabled:boolean = this.voting.length >= 2;
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
    this.disabled = this.voting.length >= 2;
    
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGE>>>');
  }

  ngOnInit(): void {
  }
  getEmployeeData(){
    //return data employeesdata filter berdasarkan emplcari
    if (this.emplcari) {
      return this.employeesdata.filter((e) => {
        return e.name.toLowerCase().includes(this.emplcari.toLowerCase());
      });
    }else{
      return this.employeesdata;
    }
  }
}
