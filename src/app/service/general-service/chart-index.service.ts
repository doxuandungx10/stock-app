import { BaseService } from './../../shared/base-service/base-service.service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ChartIndexService extends BaseService {
  getIndexChart(id: any): Observable<any[]> {
    return this.get('/getchartindexdata/' + id);
  }
}
