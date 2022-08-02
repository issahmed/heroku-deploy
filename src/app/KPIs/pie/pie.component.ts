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

   @Input() chartData :any;

   constructor() { }

   ngOnInit() {
      this. chartOptions =this.chartData
}

}
