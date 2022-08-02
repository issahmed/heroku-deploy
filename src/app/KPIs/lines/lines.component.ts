import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.sass']
})
export class LinesComponent implements OnInit {

   Highcharts = Highcharts;
   chartOptions = {};
  
   @Input() data : any;
  
   constructor() { }
  
   ngOnInit() {  
      this.chartOptions = this.data ;
}



}
