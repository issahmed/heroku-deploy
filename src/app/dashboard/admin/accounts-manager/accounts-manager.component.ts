import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { AdminService } from '../admin.service';
import { RequestModel } from '../models/request';
import { User } from '../models/user';


@Component({
  selector: 'app-accounts-manager',
  templateUrl: './accounts-manager.component.html',
  styleUrls: ['./accounts-manager.component.sass']
})
export class AccountsManagerComponent implements OnInit {

  private reqO : Subscription ;

  requestsColumns  = ['position', 'name', 'lastName', 'email','phone','date','Decision'];
  requestsSource : any;


constructor(
  private adminService : AdminService,
  private api : ApiService
  ) {
}
ngOnInit(): void {  
  this.requestsSource = this.getAllRequests()
}

getAllRequests(){
  return this.api.getRequests()
}

acceptRequest(element:RequestModel){
  console.log(element)
    this.api.postUser(element)    
      .subscribe({
              next: (res) => {
                this.refuseRequest(element)
             }})
 

//     this.api.postUser(reqaccepteddata)
//       .subscribe({
//         next: (res) => {

//   
//          
//         },
//         error: () => {
//           alert("error while adding the session")

//         }
//       })
//   }
// }else{
//     this.updatesession()
//   }




}

// jawha fesfes
refuseRequest(req:RequestModel){
  this.api.deleteReq(req.id)
  .subscribe({
    next:()=>{
      this.requestsSource = this.getAllRequests()
    },
    error:()=>{
      alert("error while deleting request")
    }
  })
}





}
