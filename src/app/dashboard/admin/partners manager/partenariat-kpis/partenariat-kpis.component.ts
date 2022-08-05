import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partenariat-kpis',
  templateUrl: './partenariat-kpis.component.html',
  styleUrls: ['./partenariat-kpis.component.sass']
})
export class PartenariatKPIsComponent implements OnInit {

  ProspectingAverage = {
      chart: {
        type: "spline",
            plotBorderWidth: false,
            plotShadow: false     
        },
        title: {
        text: " Monthly Average Prospecting "
        },
         subtitle: {
         text:  " small description here "
         },
         xAxis:{
         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
         },
         yAxis: {          
            title:{
            text: " Prospecting numbers "
         } 
         },
         tooltip: {
            valueSuffix:""
         },
         series: [{
          name: 'Prospecting',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
        }]
      };

  partnersFields ={   
    chart : {
      plotBorderWidth: true,
      plotShadow: true
    },
    title : {
      text: "Partners Fields"
    },
    tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions : {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true           
          },     
          showInLegend: true
      }
    },
    series : [{
       type: 'pie',
       name: 'Partners Sectors',
       data: [
          {
          name :'IT', 
          y: 68.0 ,
          sliced: true,
          selected: true
        },
          ['Electronics',   12.8],
          
          ['business',    8.5],
          ['Others',      23]
      ]
    }]
};

  


  constructor() { }

  ngOnInit(): void {
  }

}

