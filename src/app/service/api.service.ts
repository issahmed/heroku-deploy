import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // session manipulation
  postSession(data : any){
    return this.http.post<any>("http://localhost:3000/sessionlist/",data)
  }
  getSession(){
    return this.http.get<any>("http://localhost:3000/sessionlist/")
  }
  putSession(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/sessionlist/"+id,data)
  }
  deleteSession(id:number){
    return this.http.delete<any>("http://localhost:3000/sessionlist/"+id)
  }

  // users 
  
  postUser(user : any){
    return this.http.post<any>("http://localhost:3000/userslist/",user)
  }
  getUsers(){
    return this.http.get<User[]>("http://localhost:3000/userslist/")
  }
  putUser(user:User,id:number){
    return this.http.put<any>("http://localhost:3000/userslist/"+id,user)
  }
  deleteUser(id:number){
    return this.http.delete<any>("http://localhost:3000/userslist/"+id)
  }

    // Requests 
  
    acceptReq(user : User){
      return this.http.post<any>("http://localhost:3000/requestslist/",user)
    }

    getRequests(){
      return this.http.get<any>("http://localhost:3000/requestslist/")
    }
    // putUser(user:User,id:number){
    //   return this.http.put<any>("http://localhost:3000/userslist/"+id,user)
    // }
    deleteReq(id:number){
      return this.http.delete<any>("http://localhost:3000/requestslist/"+id)
    }
  

}

