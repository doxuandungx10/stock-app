import { StockDetailService } from './../../../../service/general-service/stock-detail.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
import * as moment from "moment";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  yaxis?: ApexYAxis | any;
  title?: ApexTitleSubtitle | any;
};

@Component({
  selector: 'app-sym-candlechart',
  templateUrl: './sym-candlechart.component.html',
  styleUrls: ['./sym-candlechart.component.css']
})
export class SymCandlechartComponent implements OnInit {
  @Input() listChartData: any = [];
  @Input() sym: any = "";

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  lstData: any;

  constructor(private stockDetailService: StockDetailService) {
    this.chartOptions = {
      series: [
        {
          name: "candle",
          data: []
        }
      ],
      chart: {
        type: "candlestick",
        height: 350,
        toolbar: {
          show: true
        }
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
        style: {
          color: "white"
        }
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: "white"
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        },
        labels: {
          style: {
            colors: "white"
          }
        }
      }
    };
  }

  public generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  ngOnInit(): void {
    this.initCandleChart();
    this.getHisOrderMatching(this.sym);
  }

  initCandleChart() {
    // const xCategories = [];
    // this.listChartData.splice(239,268).forEach(el => {
    //   xCategories.push(moment.unix(el.t).format("YYYY-MM-DD"))
    // });
    // let xCategoriesMap = xCategories;
    // this.chartOptions.series = series;
    // console.log(xCategoriesMap);
    // console.log(this.listChartData);

    // this.chartOptions.xaxis = {
    //   categories: xCategoriesMap,
    //   type: "datetime",
    //   labels: {
    //     style: {
    //       colors: "white"
    //     }
    //   }
    // };
    // data.push(listChartData)
    let data = this.listChartData.map((item) => ({
      x: moment.unix(item.t).format("YYYY-MM-DD"),
      y: [item.o, item.h, item.l, item.c]
    }))
    console.log("formatted data", data);
    console.log(this.chartOptions.series[0]);
    this.chartOptions.series[0].data = data;
  }

  getHisOrderMatching(sym: any) {
    this.stockDetailService.getHisOrderMatching(sym).subscribe((res:any) => {
      this.lstData = res;
      console.log(this.lstData);

    });
  }
}
