import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { PopupComponent } from '../../training/popup/popup.component';

@Component({
  selector: 'app-prospect-pop-up',
  templateUrl: './prospect-pop-up.component.html',
  styleUrls: ['./prospect-pop-up.component.sass']
})
export class ProspectPopUpComponent implements OnInit {

  sessionForm!: FormGroup;
  actionBtn : string = "Add"
  constructor(private formBuilder: FormBuilder,
     private api: ApiService,
     @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<PopupComponent>) { }

  
    ngOnInit(): void {
    
      this.sessionForm = this.formBuilder.group({
        partner: ['', Validators.required],
        email: ['', Validators.required],
        representant: ['', Validators.required],
        repPhone: ['', Validators.required]
      });
      if(this.editData){
        this.actionBtn = "update"
        this.sessionForm.controls["partner"].setValue(this.editData.partner);
        this.sessionForm.controls["email"].setValue(this.editData.email);
        this.sessionForm.controls["representant"].setValue(this.editData.representant);
        this.sessionForm.controls["repPhone"].setValue(this.editData.repPhone);
      }
    }

 
  addProspect() {
    console.log("hello "  + this.sessionForm.value)
    if (! this.editData){
    if (this.sessionForm.valid) {
      this.api.confirmedPartner(this.sessionForm.value)
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
  this.api.updateProspect(this.sessionForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      this.sessionForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{alert("error while updating")}
  })
  
}

}
