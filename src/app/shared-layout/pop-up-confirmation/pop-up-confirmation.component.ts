import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-confirmation',
  templateUrl: './pop-up-confirmation.component.html',
  styleUrls: ['./pop-up-confirmation.component.sass']
})
export class PopUpConfirmationComponent implements OnInit {

  clicked = false ;
 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : any ,
      public dialogRef: MatDialogRef<PopUpConfirmationComponent> ,
      // private http:HttpClient
      ) { }

ngOnInit() {
  console.log(this.data)
}


closeDialog() {
  this.dialogRef.close(false);
}

file : any ;

getFile(event :any){
  this.file=event.target.files[0];
}


addContrat(){
  this.clicked=true
  console.log(this.clicked)

}

submitData(){
}

}
