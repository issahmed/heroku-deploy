import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { PopUpConfirmationComponent } from 'src/app/shared-layout/pop-up-confirmation/pop-up-confirmation.component';
import { ProspectPopUpComponent } from './prospect-pop-up/prospect-pop-up.component';

@Component({
  selector: 'app-prospecting-list',
  templateUrl: './prospecting-list.component.html',
  styleUrls: ['./prospecting-list.component.sass']
})
export class ProspectingListComponent implements OnInit {
  
  displayedColumns: string[] = ['organisationName', 'email', 'adress', 'function','respnsableName','phoneNumber','status'];
  dataSource : any ;
  constructor(
    private dialog: MatDialog ,
    private api :ApiService,
    private confirmation : PopUpConfirmationService
  ) { }

  ngOnInit(): void {  
    this.getProspecting()
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();    
 }

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
          this.dataSource= new MatTableDataSource(list)  
          console.log(this.dataSource)
        },
        error: (err) => {
          alert("error while fetching")
        }
      })
}

  deleteProspect(element :any){
    this.confirmation.openConfirmDialog("are you sure to delete this prospect  ?")
    .afterClosed().subscribe(
      res => {
        if(res){
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
      }
      )
  }
}
