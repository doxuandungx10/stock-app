import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  lstFundCode = ["TCBF", "TCEF", "TCFF"]
  constructor() { }

  ngOnInit(): void {
  }

}
