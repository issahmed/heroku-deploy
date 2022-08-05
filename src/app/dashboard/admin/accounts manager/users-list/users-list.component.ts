import { Component, OnInit  , OnDestroy} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { AdminService } from '../../admin.service';
import { User } from '../../models/user';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  private reqObs : Subscription ;


  name: string;
  lastName : string ;
  email : string ;
  phone: number;
  role : string;

usersColumns  = ['position', 'name', 'lastName', 'email','phone','role','edit'];
usersSource : any;

constructor(
  private adminService : AdminService,
  private dialog: MatDialog,
  private api: ApiService,
  private confirmation : PopUpConfirmationService
  ) 
  {}

ngOnInit(): void { 

          
    this.usersSource =  this.getAllUsers()

     //console.log( this.api.getUsers())
  // this.reqObs = this.adminService.userAccepted
  //    .subscribe(
  //      (user:User)=>{
  //       // console.log("now will push user "+user)
  //        this.adminService.users.push(user)  
  //      //  console.log("there a listening here")    
  //      }
  //   )
    //this.usersSource = this.adminService.getUsers();  
  }

  edit(element:any){
   // console.log(element)
    this.dialog.open(DialogComponent, {
      width: "40%",
      data :element
      
    }).afterClosed().subscribe(val=>{
      this.usersSource =  this.api.getUsers()
    })

  }

 getAllUsers() 
  {
        this.api.getUsers()
          .subscribe({
            next: (users) => {
              this.usersSource= users           
            },
            error: (err) => {
            alert("error while fetching")
            }
          })
  }

  deleteUser(element:any){
    this.confirmation.openConfirmDialog("are you sure to DELETE this User ?")
  .afterClosed().subscribe(
    res => {
      if(res){
        this.api.deleteUser(element.id)
            .subscribe({
              next:(user)=>{
                this.getAllUsers()        
              }
            })
      }
    }
    )   
  }
      

}




 





