import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  // public lineChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //   { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  // ];
  public lineChartData: ChartDataSets[] = [
    { data: [10,15,9,90,100,150,90,125,120,122,40,30,25,10], label: 'train' },
    { data: [5, 24, 20,45, 29, 56, 87, 220,176,169,187,28,66], label: 'test' },
    { data: [180, 48, 77, 90, 10, 27, 40,90,67,45,96,41,37,67], label: 'model' }
  ];
  public lineChartLabels: Label[] = ['0', '25', '50', '75', '100', '125', '150'];
  public lineChartOptions: (ChartOptions ) = {
    elements: {
      line: {
          tension: 0
      }
  },
    responsive: true,
    showLines: true, // disable for all datasets
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [ { gridLines: { display: false } }],
      yAxes: [

      { gridLines: { display: false }}
      ]
    }
  };
  public lineChartColors: Color[] = [
    { // blue
      backgroundColor: '#fff',
      borderColor: 'rgba(0, 128, 128,1)',
      pointBackgroundColor: 'rgba(0, 128, 128,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 128, 128,0.8)'
    },
    { // orange
      backgroundColor: '#fff',
      borderColor: 'rgba(255,165,0,1)',
      pointBackgroundColor: 'rgba(255,165,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,165,0,0.8)'
    },
    { // green
      backgroundColor: '#fff',
      borderColor: 'rgba(34,139,34,1)',
      pointBackgroundColor: 'rgba(34,139,34,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(34,139,34,1)'
    }
   
  ];
  public lineChartLegend = true ;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

}
