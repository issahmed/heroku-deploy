import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { AdminService } from '../../admin.service';
import { RequestModel } from '../../models/request';
import { User } from '../../models/user';


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
  private api : ApiService,
  private confirmation : PopUpConfirmationService
  ) {
}
ngOnInit(): void {  
  this.requestsSource = this.getAllRequests()
}

getAllRequests(){
  return this.api.getRequests()
}

//  choose the role 
acceptRequest(element:RequestModel){
  this.confirmation.openConfirmDialog("are you sure to accept this request ?")
  .afterClosed().subscribe(
    res => {
      if(res){
        this.api.postUser(element)    
        .subscribe({
                next: (req) => {
                  this.deleteReq(element)
               }})
      }
    }
    )
}

// jawha fesfes
refuseRequest(req:RequestModel){
  this.confirmation.openConfirmDialog("are you sure to delete this request ?")
  .afterClosed().subscribe(
    res => {
      if(res){
        this.deleteReq(req)
      }
    }
    )
}

// to only delete req without any confirmation
deleteReq(req:RequestModel){
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
