import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { PopUpConfirmationService } from 'src/app/service/pop-up-confirmation.service';
import { PopUpConfirmationComponent } from 'src/app/shared-layout/pop-up-confirmation/pop-up-confirmation.component';
import { PopupComponent } from '../../training/popup/popup.component';

@Component({
  selector: 'app-prospect-pop-up',
  templateUrl: './prospect-pop-up.component.html',
  styleUrls: ['./prospect-pop-up.component.sass']
})
export class ProspectPopUpComponent implements OnInit {

  sessionForm!: FormGroup;
  actionBtn : string = "Add"
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private confirmation : PopUpConfirmationService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<PopupComponent>
  ) { }

  
ngOnInit() {  
      this.sessionForm = this.formBuilder.group({
        partner: ['', Validators.required],
        email: ['', Validators.required],
        representant: ['', Validators.required],
        repPhone: ['', Validators.required]
      });
      if(this.editData[0]){
        this.actionBtn = "update"
        this.sessionForm.controls["partner"].setValue(this.editData[0].partner);
        this.sessionForm.controls["email"].setValue(this.editData[0].email);
        this.sessionForm.controls["representant"].setValue(this.editData[0].representant);
        this.sessionForm.controls["repPhone"].setValue(this.editData[0].repPhone);
      }
    }

  addProspect() {
    if (! this.editData[0]){
    if (this.sessionForm.valid) {  
      this.confirmation.openConfirmDialog("are you sure to add this prospect ?")
      .afterClosed().subscribe(
        res => {
          if(res){
            this.api.addPartner(this.sessionForm.value)
                .subscribe({
                  next: (res) => {
                    this.sessionForm.reset();
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
  }else{
      this.updatesession()
    }
}

updatesession(){
  if (this.editData[1]=="partners"){
    this.confirmation.openConfirmDialog("are you sure to update this partner ?")
      .afterClosed().subscribe(
        res => {
          if(res){
            this.api.updatePartners(this.sessionForm.value,this.editData[0].id)
      .subscribe({
        next:(res)=>{
          this.sessionForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{alert("error while updating")}
      })
            
            }
        }
      )  
  }else if (this.editData[1]=="prospecting") {
      this.confirmation.openConfirmDialog("are you sure to update this prospect ?")
      .afterClosed().subscribe(
        res => {
          if(res){
                this.api.updateProspect(this.sessionForm.value,this.editData[0].id)
                  .subscribe({
                    next:(res)=>{
                      this.sessionForm.reset();
                      this.dialogRef.close('update');
                    },
                    error:()=>{alert("error while updating")}
                  })          
                }
        })
    }
}


// deleteProspect(){ 

//   this.confirmation.openConfirmDialog("are you sure to delete this prospect ?")
//   .afterClosed().subscribe(
//     res => {
//       if(res){
//           this.api.deleteProspect(this.editData[0].id)
//           .subscribe({
//               next:()=>{
//                 },
//                       error:()=>{
//                         alert("error while deleting request")
//                           }                
//             })
//             this.dialogRef.close([]);                 
//             }
//     })
// }

}




