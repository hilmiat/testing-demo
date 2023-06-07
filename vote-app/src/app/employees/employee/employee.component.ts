import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  isVoted: boolean = false;
  tulisanVote: string = 'Vote';
  voteForEmployee(arg0: number) {
    // console.log('Voted for employee with id: ' + arg0);
    //ketika tombol vote ditekan, maka akan mengirimkan data ke parent component
    this.vote.emit(this.isVoted?-arg0:arg0);
    this.isVoted = !this.isVoted;
    this.tulisanVote = this.isVoted?'UnVote':'Vote';
  }
  //untuk menerima data dari parent component
  @Input() employeedata: {id: number, name: string, age: number, photoUrl: string};

  //input disabled
  @Input() disabled: boolean = false;

  //mengirimkan data ke parent component
  @Output() vote = new EventEmitter<number>();

  constructor() {
    //placeholder data
    this.employeedata = {id: 0, name: '...', age: 0, photoUrl: ''};
  }

  ngOnInit(): void {
  }

}
