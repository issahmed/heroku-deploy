import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
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
    private api :ApiService
  ) { }

  ngOnInit(): void {
   
     this.getProspecting()
    console.log("hi")
    console.log(this.dataSource)


  }

  openDialog() {
    this.dialog.open(ProspectPopUpComponent, {
      width: "30%"
    })
    // .afterClosed().subscribe(val=>{
    //   if(val === 'save'){
    //     this.getAllSessions();
    //   }
    // })
  }
  edit(element : any){
    this.dialog.open(ProspectPopUpComponent,{
      width:'30%' ,
      data:element,
      
    })
    .afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getProspecting();
    } })
    console.log(element)
  }

  confirmed(element:any){
    this.api.confirmedPartner(element)

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
