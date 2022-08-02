import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpConfirmationComponent } from '../shared-layout/pop-up-confirmation/pop-up-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class PopUpConfirmationService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg:string){
   return this.dialog.open(PopUpConfirmationComponent,{
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: "10px" },
      data :{
        message : msg
      }
    });
  }



}
