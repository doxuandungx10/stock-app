import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockNewsService {

  private symbol:string;
  private apiURL = "https://histdatafeed.vps.com.vn/company/events/"
  getData(sym:any){
    return this.http.get(this.apiURL+sym)
  }
  constructor( private http:HttpClient) {
  }

}

