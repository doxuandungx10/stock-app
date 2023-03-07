import { Component, OnInit, ViewChild } from '@angular/core';
import { StockHeatmapService } from '../service/general-service/stock-heatmap.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  dataLabels?: ApexDataLabels | any;
  title?: ApexTitleSubtitle | any;
  plotOptions?: ApexPlotOptions | any;
  legend?: ApexLegend | any;
};

@Component({
  selector: 'app-stock-treemap',
  templateUrl: './stock-treemap.component.html',
  styleUrls: ['./stock-treemap.component.css']
})
export class StockTreemapComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  public chartOptions6: Partial<ChartOptions>;
  listHeatmap1: any;
  listHeatmap2: any;
  listHeatmap3: any;
  listHeatmap4: any;
  listHeatmap5: any;
  listHeatmap6: any;
  chartData1: any[] = [];
  chartData2: any[] = [];
  chartData3: any[] = [];
  chartData4: any[] = [];
  chartData5: any[] = [];
  chartData6: any[] = [];

  constructor(private stockHeatmapService: StockHeatmapService) {
    this.chartOptions1 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "GTNN Mua",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -1000,
                to: -0.001,
                color: "#CC3B37"
              },
              {
                from: 0,
                to: 0,
                color: "#F1AD57"
              },
              {
                from: 0.001,
                to: 10,
                color: "#009D5B"
              }
            ]
          }
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "GTNN Bán",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -1000,
                to: -0.001,
                color: "#CC3B37"
              },
              {
                from: 0,
                to: 0,
                color: "#F1AD57"
              },
              {
                from: 0.001,
                to: 10,
                color: "#009D5B"
              }
            ]
          }
        }
      }
    };
    this.chartOptions3 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "KLNN Mua",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -1000,
                to: -0.001,
                color: "#CC3B37"
              },
              {
                from: 0,
                to: 0,
                color: "#F1AD57"
              },
              {
                from: 0.001,
                to: 10,
                color: "#009D5B"
              }
            ]
          }
        }
      }
    };
    this.chartOptions4 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "KLNN Bán",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -1000,
                to: -0.001,
                color: "#CC3B37"
              },
              {
                from: 0,
                to: 0,
                color: "#F1AD57"
              },
              {
                from: 0.001,
                to: 10,
                color: "#009D5B"
              }
            ]
          }
        }
      }
    };
    this.chartOptions5 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Khối Lượng",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -1000,
                to: -0.001,
                color: "#CC3B37"
              },
              {
                from: 0,
                to: 0,
                color: "#F1AD57"
              },
              {
                from: 0.001,
                to: 10,
                color: "#009D5B"
              }
            ]
          }
        }
      }
    };
    this.chartOptions6 = {
      series: [
        {
          data: [
            {
              x: "INTC",
              y: 1.2
            },
            {
              x: "GS",
              y: 0.4
            },
            {
              x: "CVX",
              y: -1.4
            },
            {
              x: "GE",
              y: 2.7
            },
            {
              x: "CAT",
              y: -0.3
            },
            {
              x: "RTX",
              y: 5.1
            },
            {
              x: "CSCO",
              y: -2.3
            },
            {
              x: "JNJ",
              y: 2.1
            },
            {
              x: "PG",
              y: 0.3
            },
            {
              x: "TRV",
              y: 0.12
            },
            {
              x: "MMM",
              y: -2.31
            },
            {
              x: "NKE",
              y: 3.98
            },
            {
              x: "IYT",
              y: 1.67
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Giá Trị",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -1000,
                to: -0.001,
                color: "#CC3B37"
              },
              {
                from: 0,
                to: 0,
                color: "#F1AD57"
              },
              {
                from: 0.001,
                to: 10,
                color: "#009D5B"
              }
            ]
          }
        }
      }
    };
  }

  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  ngOnInit(): void {
    this.getHeatmap1();
    this.getHeatmap2();
    this.getHeatmap3();
    this.getHeatmap4();
    this.getHeatmap5();
    this.getHeatmap6();
    // this.formatchartData1();
  }

  getHeatmap1() {
    this.stockHeatmapService.getData1().subscribe((res: any) => {
      this.listHeatmap1 = res;
      this.formatchartData1();
    })
  }
  formatchartData1() {
    this.listHeatmap1.items[0].sectors.map(sector => {      
      sector.tickers.map(ticker =>
         {
        ticker.vietName = sector.name;
        this.chartData1.push(ticker);
      })
    })
    this.chartOptions1.series[0].data = [];
    this.chartData1.map( data => {
      this.chartOptions1.series[0].data.push({
        x: data.name,
        y: (data.percentPriceChange*100).toFixed(2)
      })
    } )
  }

  getHeatmap2() {
    this.stockHeatmapService.getData2().subscribe((res: any) => {
      this.listHeatmap2 = res;
      this.formatchartData2();
    })
  }
  formatchartData2() {
    this.listHeatmap2.items[0].sectors.map(sector => {      
      sector.tickers.map(ticker =>
         {
        ticker.vietName = sector.name;
        this.chartData2.push(ticker);
      })
    })
    this.chartOptions2.series[0].data = [];
    this.chartData2.map( data => {
      this.chartOptions2.series[0].data.push({
        x: data.name,
        y: (data.percentPriceChange*100).toFixed(2)
      })
    } )
  }

  getHeatmap3() {
    this.stockHeatmapService.getData3().subscribe((res: any) => {
      this.listHeatmap3 = res;
      this.formatchartData3();
    })
  }
  formatchartData3() {
    this.listHeatmap3.items[0].sectors.map(sector => {      
      sector.tickers.map(ticker =>
         {
        ticker.vietName = sector.name;
        this.chartData3.push(ticker);
      })
    })
    this.chartOptions3.series[0].data = [];
    this.chartData3.map( data => {
      this.chartOptions3.series[0].data.push({
        x: data.name,
        y: (data.percentPriceChange*100).toFixed(2)
      })
    } )
  }

  getHeatmap4() {
    this.stockHeatmapService.getData4().subscribe((res: any) => {
      this.listHeatmap4 = res;
      this.formatchartData4();
    })
  }
  formatchartData4() {
    this.listHeatmap4.items[0].sectors.map(sector => {      
      sector.tickers.map(ticker =>
         {
        ticker.vietName = sector.name;
        this.chartData4.push(ticker);
      })
    })
    this.chartOptions4.series[0].data = [];
    this.chartData4.map( data => {
      this.chartOptions4.series[0].data.push({
        x: data.name,
        y: (data.percentPriceChange*100).toFixed(2)
      })
    } )
  }

  getHeatmap5() {
    this.stockHeatmapService.getData5().subscribe((res: any) => {
      this.listHeatmap5 = res;
      this.formatchartData5();
    })
  }
  formatchartData5() {
    this.listHeatmap5.items[0].sectors.map(sector => {      
      sector.tickers.map(ticker =>
         {
        ticker.vietName = sector.name;
        this.chartData5.push(ticker);
      })
    })
    this.chartOptions5.series[0].data = [];
    this.chartData5.map( data => {
      this.chartOptions5.series[0].data.push({
        x: data.name,
        y: (data.percentPriceChange*100).toFixed(2)
      })
    } )
  }

  getHeatmap6() {
    this.stockHeatmapService.getData6().subscribe((res: any) => {
      this.listHeatmap6 = res;
      this.formatchartData6();
    })
  }
  formatchartData6() {
    this.listHeatmap6.items[0].sectors.map(sector => {      
      sector.tickers.map(ticker =>
         {
        ticker.vietName = sector.name;
        this.chartData6.push(ticker);
      })
    })
    this.chartOptions6.series[0].data = [];
    this.chartData6.map( data => {
      this.chartOptions6.series[0].data.push({
        x: data.name,
        y: (data.percentPriceChange*100).toFixed(2)
      })
    } )
  }
}

