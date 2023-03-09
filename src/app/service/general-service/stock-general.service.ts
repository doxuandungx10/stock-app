import { BaseService } from './../../shared/base-service/base-service.service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class StockGeneralService extends BaseService {
  getListStock(data): Observable<any[]> {
    return this.get('/getliststockdata/' + data);
  }
  getBaseWorldIndex(): Observable<any[]> {
    return this.get('/getlistbaseworldindex');
  }
}
