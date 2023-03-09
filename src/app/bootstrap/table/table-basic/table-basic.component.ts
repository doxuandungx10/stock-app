import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../service/general-service/table-stocks.service';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

@Component({
  selector: 'app-table-basic',
  templateUrl: './table-basic.component.html',
  styleUrls: ['./table-basic.component.css'],
  providers: [TableService]
})
export class TableBasicComponent implements OnInit {
  topMover: any[] = [];

  constructor(
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.getTopMover();
  }

  getTopMover() {
    this.tableService.getTopMoverAPI()
      .subscribe((res:any) => {
        this.topMover = res.items;
        console.log("mover", this.topMover);
      });
  }

}
