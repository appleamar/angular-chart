import { Component, OnInit, ViewChild,ChangeDetectorRef } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { map as _map, slice as _slice, property as _property, forEach as _forEach, cloneDeep as _clone, findIndex as _findIndex } from 'lodash';

import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {HttpService} from "../http.service"
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  constructor(public httpService: HttpService,public changeDetectorRef: ChangeDetectorRef) { }
  
  /*barChartData - input chartData modified as per ng2-bar chart data */
  public trainData: any[] = [];
  public testData: any[] = [];
  public forecastData: any[] = [];

  
  public lineChartData: any[] = [];
  public lineChartLabels: Label[] = ['0', '25', '50', '75', '100', '125', '150','175','200','225','300'];
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
 

  ngOnInit() {
    this.getMatplotData();
  }

  public getMatplotData(){
    this.httpService.getTrainData().subscribe(
      (response: any) => { 
       this.trainData = this.updateChart(response,'train');
      },
      (error: any) => {
        console.log('error', error);
      }
    );
    this.httpService.getTestData().subscribe(
      (response: any) => {
        this.testData= this.updateChart(response,'test');
      },
      (error: any) => {
        console.log('error', error);
      }
    );
   
    this.httpService.getForecastData().subscribe(
      (response: any) => {
        this.forecastData= this.updateChart(response,'model');
        this.lineChartData.push(this.trainData);
        this.lineChartData.push(this.testData);
        this.lineChartData.push(this.forecastData);
        this.changeDetectorRef.detectChanges();
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }


  //chart updation 
  public updateChart(cdata,label) {
    let chartData : any = {};
    chartData['data']=_map(cdata, _property('total_activity'));
    chartData['label']= label;
     return chartData;
    
    }
 
}
