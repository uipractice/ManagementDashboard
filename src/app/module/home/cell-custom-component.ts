import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WebRequestService } from 'src/services/web-request.service';
import { Data } from './data.service';
@Component({
  selector: 'app-custom',
  templateUrl: './cell-custom-component.html',
})
export class CellCustomComponent implements OnInit {
  data: any;
  params: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    public service: WebRequestService,
    public dataService: Data
  ) {}

  agInit(params) {
    this.params = params;
    this.data = params.value;
  }

  ngOnInit() {}

  editRow() {
    let rowData = this.params;
    let i = rowData.rowIndex;
    console.log(rowData.data);
    this.dataService.data = rowData.data;
  }

  viewRow() {
    let rowData = this.params;
    console.log(rowData.data);
    this.service.deleteEmpDetails(rowData.data._id).then((res) => {
      if (res['statusCode'] === 200) {
        alert('deleted succesfully');
      }
    });
  }
}
