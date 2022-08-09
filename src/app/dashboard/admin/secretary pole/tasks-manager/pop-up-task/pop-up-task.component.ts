import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { PopUpConfirmationComponent } from 'src/app/shared-layout/pop-up-confirmation/pop-up-confirmation.component';
import { DialogComponent } from '../../../accounts manager/users-list/dialog/dialog.component';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-pop-up-task',
  templateUrl: './pop-up-task.component.html',
  styleUrls: ['./pop-up-task.component.sass']
})
export class PopUpTaskComponent implements OnInit {
  roles = [
    {id:1,role:"Precident"},
    {id:2,role:"Vice Precident"},
    {id:3,role:"RH"},
    {id:4,role:"Dev Com"},
    {id:5,role:"Marketing"},
    {id:6,role:"Finance"},
    {id:7,role:"secretary"},
    {id:8,role:" Project manager"}
  ]

  priority =
  [
    {id:0,priority:'lower'},
    {id:1,priority:'normal'},
    {id:2,priority:'higher'}
  ]
  prioritySelected :number ;
  roleSelected :number;

  editTask!: FormGroup;
  users:any[] ;
  i:number;
  taskData: any;
  actionBtn="add";

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public task : any,
    private confirmation : PopUpConfirmationService,
    private api :ApiService

    ) {}
    campaignOne = new FormGroup({
      start: new FormControl(today),
      end: new FormControl(new Date(year, month, 16)),
    });
    campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19)),
    });

  ngOnInit(): void {

  this.editTask = this.formBuilder.group({
    task: ["",Validators.required],
    description: [""],
    assignedTo: [""],
    priority: [""]
  });
  if(this.task[0]){
    this.actionBtn = "update"
    this.prioritySelected=this.task[0].priority.id
    //console.log(this.roleSelected=this.task[0].assigned_to.id)
    this.roleSelected=this.task[0].assigned_to.id 
    this.editTask.controls["task"].setValue(this.task[0].task);
    this.editTask.controls["description"].setValue(this.task[0].details);
  
  }
}

updateTask() {

  if (this.task[1]=="update"){
    const task=this.editTask.value
    const prior=this.priority.find(x => x.id == task.priority)?.priority;
    const rol=this.roles.find(x => x.id == task.role)?.role;

    const taskCreated =
      {
        task: task.task,
        assigned_to: {id:task.role,role:rol},
        due_day : "lundi",
        priority : {id:task.priority,priority:'normal'},
        details: "this task milkhr mehich task nekbes fik "
      }
    this.confirmation.openConfirmDialog("are you sure to save changes ?")
      .afterClosed().subscribe(
        res => {
          if(res){
            this.api.putTask(taskCreated,this.task[0].id)
      .subscribe({
        next:(res)=>{
          this.editTask.reset();
          this.dialogRef.close('update');
        },
        error:()=>{alert("error while updating")}
      })
            
            }
        }
      ) 
  }
}
  addTask(){
      if (this.editTask.valid) {  
        const task=this.editTask.value
        console.log(task)
        const prior=this.priority.find(x => x.id == task.priority)?.priority;
        const rol=this.roles.find(x => x.id == task.assignedTo)?.role;
        const taskCreated =
          {
            task: task.task,
            assigned_to: {id:task.roassignedTole,role:rol},
            due_day : "lundi",
            priority : {id:task.priority,priority:prior},
            details: "this task milkhr mehich task nekbes fik "
          }
        this.confirmation.openConfirmDialog("are you sure to add this Task ?")
        .afterClosed().subscribe(
          (res: any) => {
            if(res){
              this.api.postTask(taskCreated)
                  .subscribe({
                    next: (res) => {
                      this.editTask.reset();
                      this.dialogRef.close();           
                    },
                    error: () => {
                      alert("error while adding the session")
                    }
                  })
              }
          }
        )  
      }
  }
}