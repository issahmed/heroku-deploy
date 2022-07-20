import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { ProspectPopUpComponent } from './prospect-pop-up/prospect-pop-up.component';

@Component({
  selector: 'app-prospecting-list',
  templateUrl: './prospecting-list.component.html',
  styleUrls: ['./prospecting-list.component.sass']
})
export class ProspectingListComponent implements OnInit {

  displayedColumns: string[] = ['partner', 'email', 'representant', 'representant phone','Decision'];
  dataSource : any ;
  constructor(
    private dialog: MatDialog ,
    private api :ApiService,
    private confirmation : PopUpConfirmationService
  ) { }

  ngOnInit(): void {
  
    this.getProspecting()
    console.log("hi")
    console.log(this.dataSource)
  }

  openDialog() {
    this.dialog.open(ProspectPopUpComponent, {
      width: "30%",
      data :[null,""]
    })
    .afterClosed().subscribe(val=>{
        this.getProspecting();      
    })
  }

  edit(element : any){
    this.dialog.open(ProspectPopUpComponent,{
      width:'30%' ,
      data:[element,"prospecting"]     
    })
    .afterClosed().subscribe(val=>{
        this.getProspecting();
     })
    console.log(element)
  }

  confirmed(element:any){
    this.confirmation.openConfirmDialog("are you sure to add this prospect as partner ?")
    .afterClosed().subscribe(
      res => {
        if(res){
          this.api.confirmedPartner(element)    
          .subscribe({
                  next: (req) => {
                    this.deleteProspectAfterConfirmed(element)
                }})
        }
      }
      )
  } 

  // refuseRequest(req:any){
  //   this.confirmation.openConfirmDialog("are you sure to delete this request ?")
  //   .afterClosed().subscribe(
  //     res => {
  //       if(res){
  //         this.deleteReq(req)
  //       }
  //     }
  //     )
  // }
  
  // to only delete req without any confirmation
  deleteProspectAfterConfirmed(element:any){
    this.api.deleteProspect(element.id)
            .subscribe({
              next:()=>{
                 this.getProspecting()
              },
              error:()=>{
                alert("error while deleting request")
              }
    })     
  }
  


  getProspecting() {
    this.api.getProspectingList()
      .subscribe({
        next: (list) => {
          this.dataSource=list    
        },
        error: (err) => {
          alert("error while fetching")
        }
      })
  }


}
