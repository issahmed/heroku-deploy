import { EventEmitter, Injectable } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private api : ApiService
  ) { }
  
  userAccepted = new EventEmitter<User>();
  userRefused = new EventEmitter<number>();
  userSelectedindex = new EventEmitter<number>();

  name: string;
  lastName : string ;
  email : string ;
  phone: string;
  date : string ;
  role : string ;
  id : number ;


  users = [
    {position: 1, name: 'molka', lastName:'louka', email: 'molka@moll', phone: ' 8888888', role : "RH",id :0},
    {position: 2, name: 'ilyes', lastName:'dali', email: 'ilyes@dali', phone: ' 77777777', role : "VP ",id :1},
    {position: 3, name: 'molka', lastName:'prr', email: 'molka@aissa', phone: ' 50123102', role : "P ",id :2},
    {position: 4, name: 'ahmed', lastName:'aissa', email: 'ahmed@aissa', phone: ' 50123102', role : "membre senior ",id :3},
    {position: 5, name: 'ahmed', lastName:'chhata', email: 'ahmed@chhata', phone: ' 99999999', role : "membre senior ",id :4},
    {position: 6, name: 'ahmed', lastName:'hamouda', email: 'ahmed@aissa', phone: ' 85858', role : "membre junior ",id :5},
    {position: 7, name: 'dali', lastName:'daloula', email: 'ahmed@aissa', phone: ' 58585858', role : "membre junior ",id :6},
    {position: 8, name: 'ghazi', lastName:'hamouda', email: 'ahmed@aissa', phone: ' 858585', role : "membre junior ",id :7},
    {position: 9, name: 'aziz', lastName:'front', email: 'ahmed@aissa', phone: ' 858585', role : "membre junior ",id :8},
  ];

  requests = [
    {position: 1, name: 'molka', lastName:'louka', email: 'molka@moll', phone: ' 8888888', date :"12/12/2022"},
    {position: 2, name: 'ilyes', lastName:'dali', email: 'ilyes@dali', phone: ' 77777777',date :"11/11/2020"},
    {position: 3, name: 'molka', lastName:'prr', email: 'molka@aissa', phone: ' 50123102',date :"10/10/1000"},
    {position: 4, name: 'ahmed', lastName:'aissa', email: 'ahmed@aissa', phone: ' 50123102',date :"9/9/1010"} 
    ];
    requestsSource = this.requests;


  getUsers(){
    return this.users;
  }

  addUser(user : any){
    // user["id"]=50;
    // this.users.push(user);

  }

  getRequests(){
    return this.requests;
  }


  updateUserData(user:User , id : number){
    // find user by id and replace it with new data 
    const userIndex = this.users.findIndex((u => u.id == id));
    this.users[userIndex]=user
    console.log(this.users)
  }

  findUserByID(id:number){
    const userfound = this.users.find(
      u=>u.id == id
      );
      // later a9ra hseb mafamech l id heka 
      return userfound
  }

 refuseReq(index:number){
 
  this.userRefused
  .subscribe(
    (index : number) =>{
      this.requests.splice(index, 1)
      this.requestsSource= this.getRequests() ;
    }
  )
 }

// ngOnInit(){
//   this.userRefused.subscribe(
//     (index:number)=>{
//       this.requests.splice(index, 1)
//       this.requestsSource= this.getRequests() ;  
//       }
//   )
//     }

}

