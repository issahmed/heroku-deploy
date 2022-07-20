import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { AdminService } from '../../admin.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  editUser!: FormGroup;
  users:User[] ;
  i:number;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogComponent>,
    private api : ApiService ,
    private confirmation : PopUpConfirmationService ,
    @Inject(MAT_DIALOG_DATA) public userData : User

    ) { }

  ngOnInit(): void {
  
    this.editUser = this.formBuilder.group({
      name: [this.userData.name,Validators.required],
      lastName: [this.userData.lastName,Validators.required],
      email: [this.userData.email,Validators.required],
      phone: [this.userData.phone,Validators.required],
      role: [this.userData.role,Validators.required]
  });

}

  // DONE 
  userUpdate() {
    const u = {
      id :this.userData.id,
      position : this.userData.position
    }
    const userUpdated = { ...this.editUser.value, ...u };
    this.api.putUser(userUpdated,this.userData.id)
    .subscribe({
      next:(user)=>{  
      },
      error:()=>{alert("error while updating")}
    })
    this.dialogRef.close([]);
    alert("modification succeed")
  }


  deleteUser(){
    this.confirmation.openConfirmDialog("are you sure to DELETE this User ?")
  .afterClosed().subscribe(
    res => {
      if(res){
        this.api.deleteUser(this.userData.id)
            .subscribe({
              next:(user)=>{        
              }
            })
            this.dialogRef.close([]);         
      }
    }
    )   
  }

}