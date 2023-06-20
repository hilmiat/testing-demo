import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  dataUsers: {id: number, name: string, email: string}[] = [
    { id: 1, name: 'Name', email: 're' },
    { id: 2, name: 'Ervin Howell', email: 're' },
    { id: 3, name: 'Clementine Bauch', email: 're' },
  ];
  generateUser(): {id: number, name: string, email: string}[] {
    return this.dataUsers;
  }

  getUserFromAPI(): {id: number, name: string, email: string}[]{
    return [{id: 1, name: 'Leanne Graham', email: 'sd'}];
  }
}
