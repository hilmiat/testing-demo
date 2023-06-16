import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http:HttpClient) { }
  //get all user
  getAllUser(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
  //get user by id
  getUserById(id: number){
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  //create user
  createUser(data:any){
    return this.http.post<any>('https://jsonplaceholder.typicode.com/users',data);
  }
  //update user
  updateUser(id:number,data:any){
    return this.http.put<any>(`https://jsonplaceholder.typicode.com/users/${id}`,data);
  }
  //delete user
  deleteUser(id:number){
    return this.http.delete<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
  //search user
  searchUser(keyword:string){
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?q=${keyword}`);
  }
}
