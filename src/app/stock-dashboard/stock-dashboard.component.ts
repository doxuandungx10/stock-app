import { Component, OnInit } from '@angular/core';
import { StockGeneralService } from '../service/general-service/stock-general.service';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css'],
  providers: [StockGeneralService]
})
export class StockDashboardComponent implements OnInit {
  lstFundCode = ['TCBF', 'TCEF', 'TCFF'];
  lstIndexSource = [
    {
      name: 'VN-INDEX',
      id: '10',
    },
    {
      name: 'VN30-INDEX',
      id: '11',
    },
    {
      name: 'HNX-INDEX',
      id: '02',
    },
    {
      name: 'UPCOM',
      id: '03',
    },
  ];
  lstBaseWorldIndex: any[] = [];
  constructor(private stockGeneralService: StockGeneralService) {}

  ngOnInit(): void {
    this.getBaseWorldIndex();
  }

  getBaseWorldIndex() {
    this.stockGeneralService.getBaseWorldIndex().subscribe((res: any) => {
      this.lstBaseWorldIndex = res;
    });
  }
}
