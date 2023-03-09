import { Component, Input, OnInit } from '@angular/core';
import { StockDetailService } from 'src/app/service/general-service/stock-detail.service';

@Component({
  selector: 'app-sym-finance',
  templateUrl: './sym-finance.component.html',
  styleUrls: ['./sym-finance.component.css'],
})
export class SymFinanceComponent implements OnInit {
  @Input() sym: any = '';
  stockFinanceYear: any[] = [];
  stockFinancePeriod: any[] = [];

  constructor(private stockDetailService: StockDetailService) {}

  ngOnInit(): void {
    this.getBaseInfo();
  }

  getBaseInfo() {
    this.stockDetailService.getBaseInfo(this.sym).subscribe((res: any) => {
      this.stockFinanceYear = res.ketquaKDNam;
      this.stockFinancePeriod = res.ketquaKDQuy;
      console.log(res);
    });
  }

  toCurrencyFormat(data) {
    return new Intl.NumberFormat().format(data);
  }
}
