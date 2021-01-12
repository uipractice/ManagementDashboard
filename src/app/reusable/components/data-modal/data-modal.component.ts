import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/services/modal-actions.service';

@Component({
  selector: 'ev-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent implements OnInit {
  data: any;
  modalId: any;
  isExpand = false;
  allNewData: any;
  employeeList: any;
  rowData: any;
  constructor( public dialogRef: MatDialogRef<DataModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService) { }

  ngOnInit(): void {
    this.modalId = this.modalData.modalId
    this.data = this.modalData.modalData
    this.allNewData = this.modalData.allNewsData
    this.rowData =  this.modalData.employeeData
    this.rowData.forEach((row, i) => row['SLNo'] = i + 1)
    console.log('this.data', this.rowData)
    // this.classHeight= "small-height";
  }
  columnDefs = [
    {  headerName: "SL.No", field: 'SLNo', width: 86},
    {  headerName: 'EMP Id',field: 'employee_employee_id', sortable: true, filter: true, width: 100 },
    {  headerName: 'NAME',field: 'employee_company_name', sortable: true, filter: true, width: 190 },
    {  headerName: 'DESIGNATION',field: 'employee_designation_name', sortable: true, filter: true,width: 190 },
    {  headerName: 'PRACTICE',field: 'master3', sortable: true, filter: true},
    {  headerName: 'REPORTING TO',field: 'employee_reporting_to', sortable: true, filter: true}
];
// columnDefs = [
//     {
//       children: [
//         {
//           headerName: 'Athlete',
//           field: 'employee_employee_id',
//           width: 150,
//           suppressSizeToFit: true,
//           enableRowGroup: true,
//           rowGroupIndex: 0,
//         },
//         {
//           headerName: 'Age',
//           field: 'employee_company_name',
//           width: 90,
//           minwidth: 75,
//           maxWidth: 100,
//           enableRowGroup: true,
//         },
//        {
//          headerName: 'Age',
//          field: 'employee_department_name',
//          width: 90,
//          minwidth: 75,
//          maxWidth: 100,
//          enableRowGroup: true,
//        },
//        {
//          headerName: 'Age',
//          field: 'employee_reporting_to',
//          width: 90,
//          minwidth: 75,
//          maxWidth: 100,
//          enableRowGroup: true,
//        },
//        {
//          headerName: 'Age',
//          field: 'master3',
//          width: 90,
//          minwidth: 75,
//          maxWidth: 100,
//          enableRowGroup: true,
//        },
//        {
//          headerName: 'Age',
//          field: 'master1',
//          width: 90,
//          minwidth: 75,
//          maxWidth: 100,
//          enableRowGroup: true,
//        }
//       ],
//     },
//   ];
  //  gridOptions = {
  //     defaultColDef: {
  //       sortable: true,
  //       resizable: true,
  //       floatingFilter: true,
  //     },
  //     columnDefs: this.columnDefs,
  //     rowData: null,
  //   };
  actionFunction() {
    // this.modalService.modalAction(this.modalData);
    this.closeModal();
  }
  closeModal() {
    this.dialogRef.close();
  }
  isListExpanded() {
    this.isExpand = !this.isExpand;
    if(this.isExpand){
      this.dialogRef.updateSize('42%','80%')
    }
 };
}
