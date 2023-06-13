import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  dataUser:User[] = [
    {id: 1, nama: 'Rizki', alamat: 'Jl. Raya Bogor'},
    {id: 2, nama: 'Rizka', alamat: 'Jl. Raya Bogor'},
    {id: 3, nama: 'Rizku', alamat: 'Jl. Raya Bogor'},
  ];

  //get all data user
  getAllUser():User[]{
    return this.dataUser;
  }
  // get user by id
  getUserById(id: number){
    return this.dataUser.find(user => user.id === id);
  }
  // add user
  addUser(user: User){
    this.dataUser.push(user);
  }
  // update user
  updateUser(user: User){
    const index = this.dataUser.findIndex(u => u.id === user.id);
    this.dataUser[index] = user;
  }
  // delete user
  deleteUser(id: number){
    this.dataUser = this.dataUser.filter(user => user.id !== id);
  }
  //find user by name
  findUserByName(nama: string){
    return this.dataUser.filter(user => user.nama.toLowerCase().includes(nama.toLowerCase()));
  }

  constructor() { }
}
