import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.sass']
})
export class PopUpConfirmationComponent implements OnInit {
  openConfirmDialog(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any ,
      public dialogRef: MatDialogRef<PopUpConfirmationComponent>) { }

ngOnInit() {
}

closeDialog() {
  this.dialogRef.close(false);
}

}
