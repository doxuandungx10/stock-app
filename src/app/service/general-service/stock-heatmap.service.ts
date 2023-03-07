import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockHeatmapService {

  // private criteria: string;
  private apiURL1 = "https://fiin-market.ssi.com.vn/HeatMap/GetHeatMap?language=vi&Exchange=All&Criteria=FrBuyVal"
  private apiURL2 = "https://fiin-market.ssi.com.vn/HeatMap/GetHeatMap?language=vi&Exchange=All&Criteria=FrSellVal"
  private apiURL3 = "https://fiin-market.ssi.com.vn/HeatMap/GetHeatMap?language=vi&Exchange=All&Criteria=FrBuyVol"
  private apiURL4 = "https://fiin-market.ssi.com.vn/HeatMap/GetHeatMap?language=vi&Exchange=All&Criteria=FrSellVol"
  private apiURL5 = "https://fiin-market.ssi.com.vn/HeatMap/GetHeatMap?language=vi&Exchange=All&Criteria=Volume"
  private apiURL6 = "https://fiin-market.ssi.com.vn/HeatMap/GetHeatMap?language=vi&Exchange=All&Criteria=Value"
  getData1(){
    return this.http.get(this.apiURL1)
  }
  getData2(){
    return this.http.get(this.apiURL2)
  }
  getData3(){
    return this.http.get(this.apiURL3)
  }
  getData4(){
    return this.http.get(this.apiURL4)
  }
  getData5(){
    return this.http.get(this.apiURL5)
  }
  getData6(){
    return this.http.get(this.apiURL6)
  }
  constructor( private http:HttpClient) {
  }

}

