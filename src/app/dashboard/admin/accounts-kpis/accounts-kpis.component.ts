import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-kpis',
  templateUrl: './accounts-kpis.component.html',
  styleUrls: ['./accounts-kpis.component.sass']
})
export class AccountsKPIsComponent implements OnInit {

  accountsUsage = {
      chart: {
        type: "spline",
            plotBorderWidth: false,
            plotShadow: false     
        },
        title: {
        text:" Daily usage  "
        },
         subtitle: {
         text:  " number of users by day "
         },
         xAxis:{
         categories:["MON", "TUE", "WED", "THU", "FRI", "SAT","SUN"]
         },
         yAxis: {          
            title:{
            text:  " daily usage by hours "
         } 
         },
         tooltip: {
            valueSuffix:""
         },
         series: [{
          name: 'usage',
          data: [40,12, 40, 45,20, 4, 30]
        }]
};



  
  constructor() { }

  ngOnInit(): void {
  }

}
