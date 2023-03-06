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
    },
    {
      name: 'HNX',
      data: ["AAV","ADC","ALT","AMC","AME","AMV","API","APS","ARM","ART","ATS","BAB","BAF122029","BAX","BBS","BCC","BCF","BCG122006","BDB","BED","BID121027","BID121028","BID122003","BID122004","BID122005","BII","BKC","BLF","BNA","BPC"]
    },
    {
      name: 'HNX30',
      data: ["BCC","BVS","CEO","DDG","DTD","DXP","HUT","IDC","L14","L18","LAS","LHC","MBS","NDN","NRC","NTP","NVB","PLC","PVC","PVS","SHS","SLS","TAR","THD","TIG","TNG","TVC","VC3","VCS","VNR"]
    },
    {
      name: 'UPCOM',
      data: ["A32","AAS","ABB","ABC","ABI","ACE","ACM","ACS","ACV","ADP","AFX","AG1","AGE","AGF","AGP","AGX","AIC","ALV","AMP","AMS","ANT","APF","APL","APP","APT","ASA","ATA","ATB","ATD","ATG"]
    },
    {
      nameTab: 'HĐTL chỉ số VN30',
      name: 'Phái sinh',
      data: ["VN30F2303","VN30F2304","VN30F2306","VN30F2309"]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}







