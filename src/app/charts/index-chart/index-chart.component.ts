import { ChartIndexService } from 'src/app/service/general-service/chart-index.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { StockDetailService } from 'src/app/service/general-service/stock-detail.service';
import * as moment from "moment";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
import {TooltipPosition} from '@angular/material/tooltip';


export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  yaxis?: ApexYAxis | any;
  title?: ApexTitleSubtitle | any;
  stroke: ApexStroke;
  fill: ApexFill,
  labels: string[];
  markers: any;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-index-chart',
  templateUrl: './index-chart.component.html',
  styleUrls: ['./index-chart.component.css'],
  providers: [ChartIndexService]
})
export class IndexChartComponent implements OnInit {
  @Input() indexSource: any;
  @Input() fundCode = '';
  lstData: any[] = [];
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  listData: any;
  listNews:any[];

  constructor(private chartIndexService: ChartIndexService) {
    this.chartOptions = {
      series: [
        {
          name: 'Volume',
          type: 'area', //volume
          data: [],
        },
        {
          name: 'Price',
          type: 'line', //price
          data: []
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'solid',
        opacity: [0.35, 1],
      },
      xaxis: {
        // type: "datetime",
        // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        categories: [],
        labels: {
          style: {
            colors: "white"
          }
        }
      },
      // labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
      markers: {
        size: 0,
        colors: "white"
      },
      yaxis: [
        {
          title: {
            text: 'Price',
            style: {
              color: "white"
            }
          },
        },
        {
          opposite: true,
          title: {
            text: 'Volume',
            style: {
              color: "white"
            }
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          }
        }
      }
    };
  }
  ngOnInit(): void {
    this.getIndexChart();
  }

  getIndexChart() {
    this.chartIndexService.getIndexChart(this.indexSource.id).subscribe((res:any) => {
      this.chartOptions = {
        series: [
          {
            name: 'Volume',
            type: 'area', //volume
            data: []
          },
          {
            name: 'CIndex',
            type: 'line', //price
            data: []
          },
        ],
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'solid',
          opacity: [0.35, 1],
        },
        xaxis: {
          // type: "datetime",
          // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          categories: [],
          labels: {
            style: {
              colors: "white"
            }
          }
        },
        // labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        markers: {
          size: 0
        },
        yaxis: [
          {
            title: {
              text: 'CIndex',
              style: {
                color: "white"
              }
            },
          },
          {
            opposite: true,
            title: {
              text: 'Volume',
              style: {
                color: "white"
              }
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      };
      for (let i=0; i<res.data.length; i=i+10) {
        this.lstData.push(res.data[i])
      };
      console.log(this.lstData);
      this.createIndexChart();
    });
  }

  createIndexChart() {
    this.lstData.forEach(element => {
      this.chartOptions.series[0].data.push(element.vol);
      this.chartOptions.series[1].data.push(element.cIndex);
      let date = new Date(element.time)
      // this.chartOptions.labels.push(element.time);
    });
    console.log(this.chartOptions);
  }
}
