import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { from } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { Dialog } from '@angular/cdk/dialog';
import { ApiService } from 'src/app/service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass']
})
export class TrainingComponent implements OnInit {
  name: string;
  trainer: string;
  field: string;
  date: string;

  // sessions = [

  //   { name: 1, trainer: 'molka', field: 'ent', date: "12/12/2022" },
  //   { name: 2, trainer: 'ilyes', field: 'comp', date: "11/11/2022" },


  // ];

  displayedColumns: string[] = ['sessionName', 'sessionTrainer', 'sessionField', 'sessiondate','Action'];
  //sessionsSource = this.sessions
    ;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {

  }
  ngOnInit(): void {
    this.getAllSessions();
  }
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  openDialog() {
    this.dialog.open(PopupComponent, {
      width: "30%"
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllSessions();
      }
    })
  }
  getAllSessions() {
    this.api.getSession()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("error while fetching")
        }
      })

  }
  
  editsession(row : any){
    this.dialog.open(PopupComponent,{
      width:'30%' ,
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllSessions();
    } })
  }
  deleteSession(id:number){
    this.api.deleteSession(id)
    .subscribe({
      next:(res)=>{
        this.getAllSessions();
      },
      error:()=>{
        alert("error while deleting")
      }
    })

  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
