import { Component, OnInit, Inject } from '@angular/core';
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
  projectList: any;
  accountwiseProjects: any=[];
  selectedproject: any;
  constructor( public dialogRef: MatDialogRef<DataModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService ,public service: WebRequestService) { }

  ngOnInit(): void {
    this.modalId = this.modalData.modalId
    this.data = this.modalData.modalData
    this.allNewData = this.modalData.allNewsData
    this.rowData =  this.modalData.employeeData
    this.selectedLabel =  this.modalData.clickedLeabel
    this.accountList =  this.modalData.accountList
    this.projectList =  this.modalData.projectList
    this.isExpand = this.modalData.modalExpand
    if(this.rowData){
      this.rowData.forEach((row, i) => row['SLNo'] = i + 1)
    }
    console.log('this.data', this.projectList);
    
    this.accountwiseProjects
    // this.classHeight= "small-height";
    if(this.isExpand){
      this.dialogRef.updateSize('42%','80%')
    }
    this.getDefaultData(this.selectedLabel)
    // this.getAccountWiseProjectList(this.selectedLabel)
  }

  getAccountWiseProjectList(accountName){
    this.service.getDeptWiseProjectList(accountName).then((res:any) =>{
      console.log('get account wise project list',res)
    })
  }

  getDefaultData =(selectedItem)=>{
    this.projectList.filter((item) =>{
      if(item._id == selectedItem){
      this.accountwiseProjects = item.projects
    }});
    this.selectedproject = this.accountwiseProjects[0]
  }
  columnDefs = [
    {  headerName: "SL.No", field: 'SLNo', width: 86},
    {  headerName: 'EMP Id',field: 'employee_employee_id', sortable: true, width: 100 },
    {  headerName: 'NAME',field: 'employee_company_name', filter: true, width: 190 },
    {  headerName: 'DESIGNATION',field: 'employee_designation_name',filter: true,width: 190 },
    {  headerName: 'PRACTICE',field: 'master3', filter: true},
    {  headerName: 'REPORTING TO',field: 'employee_reporting_to',filter: true}
];

onChangrDropdownData(event: any){
  console.log(event.target.value)
  this.projectList.forEach(element => {
    if(element._id == event.target.value){
      this.accountwiseProjects = element.projects 
    }
  });
  this.selectedproject = this.accountwiseProjects[0]
}

onSelect(item): void {
  this.selectedproject = item;
}

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
