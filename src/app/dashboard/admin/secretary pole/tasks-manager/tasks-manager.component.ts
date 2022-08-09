import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PopUpTaskComponent } from './pop-up-task/pop-up-task.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';

/**
 * @title Table with expandable rows
 */
@Component({
  
   selector: 'app-tasks-manager',
   templateUrl: './tasks-manager.component.html',
   styleUrls: ['./tasks-manager.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TasksManagerComponent implements OnInit {


  data :any;
  columnsToDisplay = ['task', 'assigned_to', 'due_day','priority'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: taskInterface | null;
  constructor(  
    private dialog: MatDialog,
    private api : ApiService,
    private confirmation : PopUpConfirmationService,

    ){}

  ngOnInit(){
    this.getAllTasks()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();    
 }


  add(){
    this.dialog.open(PopUpTaskComponent, {
      width: "40%",      
    })
    .afterClosed().subscribe(val=>{
      this.getAllTasks()
    })
  }

  update(element:any){
    console.log(element)
      this.dialog.open(PopUpTaskComponent, {
        width: "40%",
        data :[element,"update",]
      }).afterClosed().subscribe(val=>{
        this.getAllTasks()
      })
  }


  getAllTasks(){
      this.api.getTasks()
        .subscribe({
          next: (task) => {
            //this.data= task 
            this.data= new MatTableDataSource(task)
            console.log(this.data) 
          },
          error: (err) => {
            alert("error while fetching")
          }
        })
    }
    deleteTask(task :any){
      this.confirmation.openConfirmDialog("are you sure to delete this Task  ?")
      .afterClosed().subscribe(
        res => {
          if(res){
            this.api.deleteTask(task.id)
            .subscribe({
                next:()=>{
                  this.getAllTasks()
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

export interface taskInterface {
  task: string;
  assigned_to: {};
  due_day: string;
  priority :{} ;
  details :string;
}

