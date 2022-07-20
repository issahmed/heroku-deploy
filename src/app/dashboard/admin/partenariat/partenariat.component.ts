import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-partenariat',
  templateUrl: './partenariat.component.html',
  styleUrls: ['./partenariat.component.sass']
})
export class PartenariatComponent implements OnInit {
  displayedColumns: string[] = ['partner', 'email', 'representant', 'representant phone','contrat(PDF)'];
  dataSource : any ;


  constructor(
    private api :ApiService
  ) { }

  ngOnInit(): void {
   
     this.getAllPartners()
    console.log("hi")
    console.log(this.dataSource)


  }

  getAllPartners() {
    this.api.getPartners()
      .subscribe({
        next: (list) => {
          this.dataSource=list    
        },
        error: (err) => {
          alert("error while fetching")
        }
      })

  }


}
