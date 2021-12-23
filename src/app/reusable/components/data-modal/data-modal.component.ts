import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WebRequestService } from 'src/services/web-request.service';

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
  selectedLabel: any;
  accountList: any;
  projectList: any = [];
  accountwiseProjects: any = [];
  projWiseEmployees: any = [];
  selectedproject: any;
  accountWiseEmpList: any=[];

  form: FormGroup;
  feedback_msg:string;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<DataModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any, public service: WebRequestService) {
      this.feedback_msg = modalData.feedback_msg;
     }

  ngOnInit(): void {

    this.form = this.fb.group({
      feedback_msg: [this.feedback_msg, []],
    });

    this.modalId = this.modalData.modalId
    this.data = this.modalData.modalData
    this.allNewData = this.modalData.allNewsData
    this.rowData = this.modalData.employeeData
    this.selectedLabel = this.modalData.clickedLeabel
    this.accountList = this.modalData.accountList ? this.modalData.accountList.filter(value => Object.keys(value).length !== 0) : this.modalData.accountList; //removes empty objects from array

    this.projWiseEmployees = this.modalData.projWiseEmployees
    this.isExpand = this.modalData.modalExpand
    if (this.rowData) {
      this.rowData.forEach((row, i) => row['SLNo'] = i + 1)
    }
   this.accountwiseProjects
   if (this.isExpand) {
      this.dialogRef.updateSize('42%', '80%')
    }
    this.getAccountWiseProjectList(this.selectedLabel);
    

  }

  getAccountWiseProjectList(accountName) {
    this.service.getDeptWiseProjectList(accountName).then((res: any) => {
      this.projectList = [];
      this.projectList = res;
      this.selectedproject = this.projectList[0];
      this.onSelect(this.selectedproject);
    })
  }
  getProjectWiseEmployees(projName) {
    this.service.getProjWiseEmployees(projName).then((res: any) => {

      this.rowData = res;
      if (this.rowData) {
        this.rowData.forEach((row, i) => row['SLNo'] = i + 1)
      }
   })
  }

  getAccountWiseEmpList(deptName){
    this.service.getAccountWiseEmpList(deptName).then((res:any)=>{
      this.accountWiseEmpList = res;
    })
  }

  getDefaultData = (selectedItem) => {
    if (this.projectList) {
    }
     this.selectedproject = this.projectList[0];
  }
  columnDefs = [
    { headerName: "SL.No", field: 'SLNo', width: 86 },
    { headerName: 'EMP Id', field: 'employee_employee_id', sortable: true, width: 100 },
    { headerName: 'NAME', field: 'employee_company_name', filter: true, width: 190 },
    { headerName: 'DESIGNATION', field: 'employee_designation_name', filter: true, width: 190 },
    { headerName: 'PRACTICE', field: 'master3', filter: true },
    { headerName: 'REPORTING TO', field: 'employee_reporting_to', filter: true }
  ];

  onChangrDropdownData(event: any) {
    this.getAccountWiseProjectList(event.target.value);
    this.getAccountWiseEmpList(event.target.value);
  }

  onSelect(item): void {
    this.selectedproject = item;
    this.getProjectWiseEmployees(this.selectedproject);
    
  }

  actionFunction() {
   this.closeModal();
  }

  savemodal() {
    this.dialogRef.close(this.form.value);
  }

  closeModal() {
    this.dialogRef.close();
  }
  isListExpanded() {
    this.isExpand = !this.isExpand;
    if (this.isExpand) {
      this.dialogRef.updateSize('42%', '80%')
    }
  };
}
