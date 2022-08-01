import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.sass']
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
    chartOptions = {};
  
    @Input() data = [];
  
    constructor() { }
  
    ngOnInit() {
      this. chartOptions = {   
        chart : {
           plotBorderWidth: true,
           plotShadow: true
        },
        title : {
           text: 'Partners Sectors'   
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
}

}
