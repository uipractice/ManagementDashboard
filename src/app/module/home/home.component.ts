import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WebRequestService } from 'src/services/web-request.service';
import { CellCustomComponent } from './cell-custom-component';
import { Data } from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private gridApi;
  private gridColumnApi;

  columnDefs;
  private defaultColDef;
  rowData: any;

  patchValue = {
    EV_empID: '1834',
    EV_firstName: 'Vinayak',
    EV_lastName: 'Dharmasthala',
    EV_DOB: '15/07/1995',
    EV_gender: 'Male',
    EV_phoneNo: '9398497212',
    EV_address: 'Flat no 3890, road no 9, vidyuth nagar new mig',
    EV_state: 'Telangana',
    EV_city: 'Hyderabad',
    EV_DOJ: '16/03/2020',
    EV_email: 'vdharmasthala@evoketechnologies.com',
    EV_OUName: 'Kaakateeya',
    EV_Grade: 'A',
    EV_status: 'Active',
    EV_designation: 'Senior Technical Associate',
    EV_master3: 'Yes',
    EV_reportingTo: 'Rajesh Kotnur',
    EV_deptName: 'UI Practice',
    EV_OUCompany: 'Kaakateeya',
    EV_reportingToSec: 'Mustaq Basha',
  };
  constructor(private service: WebRequestService, public dataService: Data) {
    this.columnDefs = [
      {
        headerName: 'Sl_no',
        colId: 'Sl_no',
        valueGetter: 'node.id',
        width: 80,
        pinned: 'left',
      },
      {
        headerName: 'EV_empID',
        field: 'EV_empID',
        width: 150,
        pinned: 'left',
      },
      {
        headerName: 'EV_firstName',
        field: 'EV_firstName',
        width: 150,
        pinned: 'left',
      },
      {
        headerName: 'EV_lastName',
        field: 'EV_lastName',
        width: 150,
      },
      {
        headerName: 'EV_DOB',
        field: 'EV_DOB',
        width: 150,
      },
      {
        headerName: 'EV_gender',
        field: 'EV_gender',
        width: 110,
      },
      {
        headerName: 'EV_phoneNo',
        field: 'EV_phoneNo',
        width: 150,
      },
      {
        headerName: 'EV_address',
        field: 'EV_address',
        width: 500,
      },
      {
        headerName: 'EV_state',
        field: 'EV_state',
        width: 100,
      },
      {
        headerName: 'EV_city',
        field: 'EV_city',
        width: 100,
      },
      {
        headerName: 'EV_DOJ',
        field: 'EV_DOJ',
        width: 100,
      },
      {
        headerName: 'EV_email',
        field: 'EV_email',
        width: 200,
      },
      {
        headerName: 'EV_OUName',
        field: 'EV_OUName',
        width: 100,
      },
      {
        headerName: 'EV_Grade',
        field: 'EV_Grade',
        width: 100,
      },
      {
        headerName: 'EV_status',
        field: 'EV_status',
        width: 100,
      },
      {
        headerName: 'EV_designation',
        field: 'EV_designation',
        width: 100,
      },
      {
        headerName: 'EV_reportingTo',
        field: 'EV_reportingTo',
        width: 100,
      },
      {
        headerName: 'EV_deptName',
        field: 'EV_deptName',
        width: 100,
      },
      {
        headerName: 'EV_OUCompany',
        field: 'EV_OUCompany',
        width: 100,
      },
      {
        headerName: 'EV_reportingToSec',
        field: 'EV_reportingToSec',
        width: 100,
      },
      {
        headerName: 'Actions',
        field: 'rowData',
        width: 200,
        pinned: 'right',
        cellRendererFramework: CellCustomComponent,
      },
    ];
    this.defaultColDef = { resizable: true };
  }
  @ViewChild('basicModal') public basicModal: ModalDirective;
  addNewEmployeeForm: FormGroup;
  title = 'app';

  clearPinned() {
    this.gridColumnApi.setColumnPinned('rowNum', null);
    this.gridColumnApi.setColumnPinned('athlete', null);
    this.gridColumnApi.setColumnPinned('age', null);
    this.gridColumnApi.setColumnPinned('country', null);
    this.gridColumnApi.setColumnPinned('total', null);
  }

  resetPinned() {
    this.gridColumnApi.setColumnPinned('rowNum', 'left');
    this.gridColumnApi.setColumnPinned('athlete', 'left');
    this.gridColumnApi.setColumnPinned('age', 'left');
    this.gridColumnApi.setColumnPinned('country', null);
    this.gridColumnApi.setColumnPinned('total', 'right');
  }

  pinCountry() {
    this.gridColumnApi.setColumnPinned('rowNum', null);
    this.gridColumnApi.setColumnPinned('athlete', null);
    this.gridColumnApi.setColumnPinned('age', null);
    this.gridColumnApi.setColumnPinned('country', 'left');
    this.gridColumnApi.setColumnPinned('total', null);
  }

  // jumpToCol() {
  //   var value = document.getElementById('col').value;
  //   if (typeof value !== 'string' || value === '') {
  //     return;
  //   }
  //   var index = Number(value);
  //   if (typeof index !== 'number' || isNaN(index)) {
  //     return;
  //   }
  //   var allColumns = this.gridColumnApi.getAllColumns();
  //   var column = allColumns[index];
  //   if (column) {
  //     this.gridApi.ensureColumnVisible(column);
  //   }
  // }

  // jumpToRow(value) {
  //   var value = document.getElementById('row').value;
  //   var index = Number(value);
  //   if (typeof index === 'number' && !isNaN(index)) {
  //     this.gridApi.ensureIndexVisible(index);
  //   }
  // }

  onGridReady(params) {
    this.service.getProfileData().then((data) => {
      console.log(data);
      this.rowData = data;
    });
  }
  ngOnInit(): void {
    this.initEmployeeForm();
    this.onGridReady(null);
    this.addNewEmployeeForm.patchValue(this.patchValue);
  }
  initEmployeeForm() {
    this.addNewEmployeeForm = new FormGroup({
      EV_empID: new FormControl(null, Validators.required),
      EV_firstName: new FormControl(null),
      EV_lastName: new FormControl(null),
      EV_DOJ: new FormControl(null),
      EV_gender: new FormControl(null),
      EV_phoneNo: new FormControl(null),
      EV_address: new FormControl(null),
      EV_state: new FormControl(null),
      EV_city: new FormControl(null),
      EV_DOB: new FormControl(null),
      EV_email: new FormControl(null),
      EV_OUName: new FormControl(null),
      EV_Grade: new FormControl(null),
      EV_status: new FormControl(null),
      EV_designation: new FormControl(null),
      EV_master3: new FormControl(null),
      EV_reportingTo: new FormControl(null),
      EV_deptName: new FormControl(null),
      EV_OUCompany: new FormControl(null),
      EV_reportingToSec: new FormControl(null),
    });

    // "EV_empID": "1834",
    // "EV_firstName": "Vinayak",
    // "EV_lastName": "Dharmasthala",
    // "EV_DOB": "15/07/1995",
    // "EV_gender": "Male",
    // "EV_phoneNo": "9398497212",
    // "EV_address": "Flat no 3890, road no 9, vidyuth nagar new mig",
    // "EV_state": "Telangana",
    // "EV_city": "Hyderabad",
    // "EV_DOJ": "16/03/2020",
    // "EV_email": "vdharmasthala@evoketechnologies.com",
    // "EV_OUName": "Kaakateeya",
    // "EV_Grade": "A",
    // "EV_status": "Active",
    // "EV_designation": "Senior Technical Associate",
    // "EV_master3": "Yes",
    // "EV_reportingTo": "Rajesh Kotnur",
    // "EV_deptName": "UI Practice",
    // "EV_OUCompany": "Kaakateeya",
    // "EV_reportingToSec": "Mustaq Basha"
  }
  reset() {
    this.addNewEmployeeForm.reset();
  }
  addEmployee() {
    console.log(this.addNewEmployeeForm.value);

    this.service.setEmpDetails(this.addNewEmployeeForm.value).then((res) => {
      if (res['statusCode'] === 200) {
        alert('added succesfully');
        this.onGridReady(null);
      }
    });
  }
}
