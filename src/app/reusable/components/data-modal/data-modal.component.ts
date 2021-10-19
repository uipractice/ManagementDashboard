import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/services/modal-actions.service';
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
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService, public service: WebRequestService) {
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
    // console.log(this.accountList);
    // this.projectList =  this.modalData.projectList
    this.projWiseEmployees = this.modalData.projWiseEmployees
    this.isExpand = this.modalData.modalExpand
    if (this.rowData) {
      this.rowData.forEach((row, i) => row['SLNo'] = i + 1)
    }
    // console.log("rowData with Slno: ", this.rowData);
    this.accountwiseProjects
    // this.classHeight= "small-height";
    if (this.isExpand) {
      this.dialogRef.updateSize('42%', '80%')
    }
    this.getAccountWiseProjectList(this.selectedLabel);
    

  }

  getAccountWiseProjectList(accountName) {
    this.service.getDeptWiseProjectList(accountName).then((res: any) => {
      this.projectList = [];
      this.projectList = res;
      // console.log("latest", this.projectList);
      this.selectedproject = this.projectList[0];
      this.onSelect(this.selectedproject);
    })
  }
  getProjectWiseEmployees(projName) {
    // console.log("selected project : ",projName);
    this.service.getProjWiseEmployees(projName).then((res: any) => {

      this.rowData = res;
      if (this.rowData) {
        this.rowData.forEach((row, i) => row['SLNo'] = i + 1)
      }
      // console.log('get project wise emp list', this.rowData);
    })
  }

  getAccountWiseEmpList(deptName){
    this.service.getAccountWiseEmpList(deptName).then((res:any)=>{
      this.accountWiseEmpList = res;
      // console.log(this.accountWiseEmpList);
    })
  }

  getDefaultData = (selectedItem) => {
    // console.log('selectedItem',selectedItem)
    if (this.projectList) {
      // console.log('this.projectList', this.projectList)
    }
    // this.projectList.filter((item) =>{
    //   if(item._id == selectedItem){
    //   this.accountwiseProjects = item.projects
    // }});
    this.selectedproject = this.projectList[0];
    // console.log("get Default project: ", this.selectedproject);
    // console.log("daf dept : " , this.selectedLabel);

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
    // console.log(event.target.value);
    this.getAccountWiseProjectList(event.target.value);
    this.getAccountWiseEmpList(event.target.value);
  }

  onSelect(item): void {
    //console.log(item);
    this.selectedproject = item;
    this.getProjectWiseEmployees(this.selectedproject);
    
  }

  actionFunction() {
    // this.modalService.modalAction(this.modalData);
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
