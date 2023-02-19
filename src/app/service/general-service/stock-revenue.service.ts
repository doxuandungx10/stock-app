import {BaseService} from './../../shared/base-service/base-service.service';
import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Apollo, gql, Query} from 'apollo-angular';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root' // HERE
})
export class StockRevenueService {
  constructor(private apollo: Apollo) {
  }


  // private query = `query financialIndicator($symbol: String!, $yearReport: String!, $lengthReport: String!, $size: Int!, $offset: Int!) {
  //     financialIndicator(
  //       symbol: $symbol
  //       yearReport: $yearReport
  //       lengthReport: $lengthReport
  //       size: $size
  //       offset: $offset
  //     )
  //   }`
  private query = `query financialIndicator($symbol: String!, $yearReport: String, $lengthReport: String, $size: Int, $offset: Int) {
  financialIndicator(
    symbol: $symbol
    yearReport: $yearReport
    lengthReport: $lengthReport
    size: $size
    offset: $offset
  )`

  public getStockRevenue = (sym: any) => {
    // console.log(this.query);
    // let headers = new HttpHeaders();
    // headers = headers.set('Content-Type', 'application/json')
    // headers = headers.set('Accept', '*/*')
    // headers = headers.set('Accept-Encoding', 'gzip, deflate, br')
    // headers = headers.set('Connection', 'keep-alive')
    const test = this.apollo.watchQuery<Query>({
      query: gql(`query financialIndicator($symbol: String!, $yearReport: String, $lengthReport: String, $size: Int, $offset: Int) {
  financialIndicator(
    symbol: $symbol
    yearReport: $yearReport
    lengthReport: $lengthReport
    size: $size
    offset: $offset
  )`),
      variables:{
        symbol:"ABC"
      }
    }).valueChanges.pipe((result)=>result)
    // headers = headers.set('Access-control-allow-credentials', 'true')
    // headers = headers.set('Access-Control-Allow-Headers', 'Content-Type');
    // headers = headers.set('Access-Control-Allow-Methods', 'POST');
    // headers = headers.set('Access-Control-Allow-Origin', '*');
    // headers = headers.set(':scheme', 'https');
    // headers = headers.set('Content-Type', 'application/json')
    // console.log(headers)
    // const query = this.query;
    // const variable = {
    //   symbol: "BID",
    // }
    // const operationName = "adsfadsf"
    // return this.http.post('https://finfo-iboard.ssi.com.vn/graphql', JSON.stringify({query, operationName, variable}), {
    //   headers: headers
    // })

  }
}
