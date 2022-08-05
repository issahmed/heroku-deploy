import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { ProspectPopUpComponent } from '../prospecting-list/prospect-pop-up/prospect-pop-up.component';

@Component({
  selector: 'app-partenariat',
  templateUrl: './partenariat.component.html',
  styleUrls: ['./partenariat.component.sass']
})
export class PartenariatComponent implements OnInit {
  displayedColumns: string[] = ['partner', 'email', 'representant', 'representant phone','contrat(PDF)','Action'];
  dataSource : any ;

  constructor(
    private api :ApiService,
    private dialog: MatDialog ,
    private confirmation : PopUpConfirmationService

  ) { }

  ngOnInit(): void {   
    this.getAllPartners()
    console.log("hi")
    console.log(this.dataSource)
  }

  getAllPartners() {

    this.api.getPartners()
      .subscribe({
        next: (list) => {
          this.dataSource= new MatTableDataSource(list)
        },
        error: (err) => {
          alert("error while fetching")
        }
      })
  }

  edit(element : any){
    this.dialog.open(ProspectPopUpComponent,{
      width:'30%' ,
      data:[element,"partners"]     
    })
    .afterClosed().subscribe(val=>{
        this.getAllPartners();
     })
    console.log(element)
  }

  delete(element :any){
    this.confirmation.openConfirmDialog("are you sure to delete this partner ?")
    .afterClosed().subscribe(
      res => {
        if(res){
          this.api.deletePartner(element.id)
          .subscribe({
              next:()=>{
                this.getAllPartners()
                },
                      error:()=>{
                        alert("error while deleting request")
                          }                
                      })        
        }
      }
      )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
