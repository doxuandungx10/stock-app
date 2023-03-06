import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as moment from 'moment';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";
import { ChartIndexService } from 'src/app/service/general-service/chart-index.service';

export type ChartOptions = {
  series?: ApexAxisChartSeries | any;
  chart?: ApexChart | any;
  xaxis?: ApexXAxis | any;
  yaxis?: ApexYAxis | ApexYAxis[] | any;
  title?: ApexTitleSubtitle | any;
  labels?: string[] | any;
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill?: ApexFill | any;
  tooltip?: ApexTooltip | any;
};

@Component({
  selector: 'app-mixed-line-column',
  templateUrl: './mixed-line-column.component.html',
  styleUrls: ['./mixed-line-column.component.css'],
  providers: [ChartIndexService]
})
export class MixedLineColumnComponent implements OnInit {
  @Input() indexSource: any;
  @Input() fundCode = '';
  lstData: any[] = [];

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private chartIndexService: ChartIndexService) {
    this.chartOptions = {
      series: [
        {
          name: "Website Blog",
          type: "column",
          data: [202201, 3915830, 6465882, 11017196, 15608851, 18077988, 20478652, 24548401, 27797029, 29367502, 30899277, 33164580, 36333076, 39648270, 43200534, 45691758, 48740337],
          dataLabels: {
            style: {
              colors: "white"
            }
          }
        },
        {
          name: "Social Media",
          type: "line",
          data: [20529, 2069, 20726, 20774, 20804, 20781, 20767, 20778, 20742, 20713, 20702, 20679, 20685, 20643, 20643, 20594, 20561],
          dataLabels: {
            style: {
              colors: "white"
            }
          }
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Traffic Sources",
        style: {
          color: "white"
        }
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: ["01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",],
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: "white"
          }
        }
      },
      yaxis: [
        {
          title: {
            text: "Website Blog",
            style: {
              color: "white"
            }
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media",
            style: {
              color: "white"
            }
          },
        }
      ]
    };
  }


  ngOnInit(): void {
    console.log(this.indexSource);
    this.createIndexChart();
    this.getIndexChart();
  }

  getIndexChart() {
    this.chartIndexService.getIndexChart(this.indexSource.id).subscribe((res:any) => {
      for (let i=0; i<res.data.length; i=i+100) {
        this.lstData.push(res.data[i])
      };
      console.log(this.lstData);
      this.createIndexChart();
    });
  }

  createIndexChart() {
    this.chartOptions.title.text = this.indexSource.name;
      this.lstData.forEach(element => {
        this.chartOptions.series[0].data.push(element.vol);
        this.chartOptions.series[1].data.push(element.cIndex);
        let date = new Date(element.time)
        // this.chartOptions.labels.push(element.time);
      });
    console.log(this.chartOptions);
  }

}
