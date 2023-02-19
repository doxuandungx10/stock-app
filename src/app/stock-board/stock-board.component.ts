import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-board',
  templateUrl: './stock-board.component.html',
  styleUrls: ['./stock-board.component.css']
})
export class StockBoardComponent implements OnInit {
  stockSymbol = [
    {
      name: 'VN30',
      data: ["ACB","BID","BVH","CTG","FPT","GAS","GVR","HDB","HPG","KDH","MBB","MSN","MWG","NVL","PDR","PLX","POW","SAB","SSI","STB","TCB","TPB","VCB","VHM","VIB","VIC","VJC","VNM","VPB","VRE"]
    },
    {
      name: 'HOSE',
      data: ["AAA","AAM","AAT","ABR","ABS","ABT","ACB","ACC","ACG","ACL","ADG","ADS","AGG","AGM","AGR","AMD","ANV","APC","APG","APH","ASG","ASM","ASP","AST","BAF","BBC","BCE","BCG","BCM","BFC"]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
