import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {

  sessionForm!: FormGroup;
  actionBtn : string = "save"
  constructor(private formBuilder: FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
    this.sessionForm = this.formBuilder.group({
      sessionName: ['', Validators.required],
      sessionTrainer: ['', Validators.required],
      sessionField: ['', Validators.required],
      sessiondate: ['', Validators.required]
    });
    if(this.editData){
      this.actionBtn = "update"
      this.sessionForm.controls["sessionName"].setValue(this.editData.sessionName);
      this.sessionForm.controls["sessionTrainer"].setValue(this.editData.sessionTrainer);
      this.sessionForm.controls["sessionField"].setValue(this.editData.sessionField);
      this.sessionForm.controls["sessiondate"].setValue(this.editData.sessiondate);
    }
  }
  addSession() {
    console.log("hello "  + this.sessionForm.value)
    if (! this.editData){
    if (this.sessionForm.valid) {
      this.api.postSession(this.sessionForm.value)
        .subscribe({
          next: (res) => {
            this.sessionForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert("error while adding the session")

          }
        })
    }
  }else{
      this.updatesession()
    }
}
updatesession(){
  this.api.putSession(this.sessionForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      this.sessionForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{alert("error while updating")}
  })
  
}
}
