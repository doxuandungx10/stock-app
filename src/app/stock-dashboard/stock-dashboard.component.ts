import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  lstFundCode = ["TCBF", "TCEF", "TCFF"]
  lstIndexSource = [
    {
      name: 'VN-INDEX',
      id: '10'
    },
    {
      name: 'VN30-INDEX',
      id: '11'
    },
    {
      name: 'HNX-INDEX',
      id: '02'
    },
    {
      name: 'UPCOM',
      id: '03'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
