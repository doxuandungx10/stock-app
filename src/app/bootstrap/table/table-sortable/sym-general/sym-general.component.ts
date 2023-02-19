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
import {StockNewsService} from "../../../../service/general-service/stock-news.service";
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
  selector: 'app-sym-general',
  templateUrl: './sym-general.component.html',
  styleUrls: ['./sym-general.component.css']
})
export class SymGeneralComponent implements OnInit {
  @Input() hisOrderMatching: any = [];
  @Input() sym: any = "";

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  listData: any;
  listNews:any[];

  constructor(private stockDetailService: StockDetailService,
              private stockNewsService:StockNewsService) {
    this.chartOptions = {
      series: [
        {
          name: 'Volume',
          type: 'area', //volume
          data: [10, 11, 12, 13, 25, 12, 34, 23, 23, 14, 54]
        },
        {
          name: 'Price',
          type: 'line', //price
          data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
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
    this.getHisOrderMatching(this.sym);
    this.initGeneralChart();
    this.getNews(this.sym);
  }

  initGeneralChart() {
    console.log("history: ", this.hisOrderMatching);

    let dataPrice = [];
    let dataVolume = [];
    let dataTime = [];
    this.hisOrderMatching.map((item) => {
      dataPrice.push(item.lastPrice);
    });
    this.hisOrderMatching.map((item) =>
      {
      dataVolume.push(item.lastVol);
    }
    )
    this.hisOrderMatching.map((item) =>
      {
      dataTime.push(moment(item.time).format("HH-mm"));
    }
    )
    // console.log("formatted data", data);
    // console.log(this.chartOptions.series[0]);
    this.chartOptions.series[0].data = dataVolume;
    this.chartOptions.series[1].data = dataPrice;
    this.chartOptions.xaxis.categories = dataTime;
  }

  getHisOrderMatching(sym: any) {
    this.stockDetailService.getHisOrderMatching(sym).subscribe((res: any) => {
      this.listData = res;
      // console.log(this.listData);
    });
  }

  getNews(sym:any){
    this.stockNewsService.getData(sym).subscribe((res:any)=>{
      this.listNews = res.data;
      console.log("NEWWWWWWWWWW",this.listNews);
    })
  }
  // initComboChart() {
  //   let data = this.listChartData.map((item) => ({
  //     x: moment.unix(item.t).format("YYYY-MM-DD"),
  //     y: [item.o, item.h, item.l, item.c]
  //   }))
  //   console.log("formatted data", data);
  //   console.log(this.chartOptions.series[0]);
  //   this.chartOptions.series[0].data = data;
  // }

}
