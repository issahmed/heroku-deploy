import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServerUrl = environment.apiBaseUrl ; 

  constructor(
    private http : HttpClient
    ) { }

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

     // partners manager

    getPartners(){
      return this.http.get<any>("http://localhost:3000/partnerslist/")
    }
    updatePartners(partner:any,id:number){
      return this.http.put<any>("http://localhost:3000/partnerslist/"+id,partner)
    }
    deletePartner(id:number){
      return this.http.delete<any>("http://localhost:3000/partnerslist/"+id)
    }

    // prospecting list manager

    getProspectingList(){

    // return this.http.get<any>("https://jem1.herokuapp.com/jem/api/prospect/findAll")

      return this.http.get<any>("http://localhost:3000/prospectinglist/")
    }
    confirmedPartner(partner : any){
      return this.http.post<any>("http://localhost:3000/partnerslist/",partner)
    }
    addPartner(partner : any){
      return this.http.post<any>("http://localhost:3000/prospectinglist/",partner)
    }
    updateProspect(prospect:any,id:number){
      return this.http.put<any>("http://localhost:3000/prospectinglist/"+id,prospect)
    }
    deleteProspect(id:number){
      return this.http.delete<any>("http://localhost:3000/prospectinglist/"+id)
    }

    // tasks manager

    postTask(task : any){
      return this.http.post<any>("http://localhost:3000/tasksList/",task)
    }
    getTasks(){


      //return this.http.get<any[]>("https://jem1.herokuapp.com/jem/api/task/findAll")
      return this.http.get<any[]>("http://localhost:3000/tasksList/")
    }
    
    putTask(task:any,id:number){
      return this.http.put<any>("http://localhost:3000/tasksList/"+id,task)
    }
    deleteTask(id:number){
      return this.http.delete<any>("http://localhost:3000/tasksList/"+id)
    }

}