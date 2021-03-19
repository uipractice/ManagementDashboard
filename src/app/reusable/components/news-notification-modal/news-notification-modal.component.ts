import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/services/modal-actions.service';
import { WebRequestService } from 'src/services/web-request.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'ev-news-notification-modal',
  templateUrl: './news-notification-modal.component.html',
  styleUrls: ['./news-notification-modal.component.scss']
})
export class NewsNotificationModalComponent implements OnInit {
  data: any;
  modalId: any;
  selectedId: any;
  startDate : Date;
  createNews: any;
  newNotification: any;
  newNotificationForm: any;
  notificationDetailsForm: FormGroup;
  isnotificationDetailsForm: boolean = true;
  selectedItem: any;
  constructor( public dialogRef: MatDialogRef<NewsNotificationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService, public service: WebRequestService,private fb: FormBuilder) {
      this.notificationDetailsForm = fb.group({
        'messagedescription': [null, Validators.required],
        'messagetype': [null, Validators.required],
        'date': [null, Validators.required]
    })
    this.startDate = new Date();
  }

  ngOnInit(): void {
    this.modalId = this.modalData.modalId
    this.data = this.modalData.modalData
    this.selectedId = this.modalData.selectedId
    this.selectedItem = this.modalData.selectedItem
    console.log('selectedItem', this.selectedItem, this.selectedId)
    this.updateNotificationData();
  }
   
  actionFunction() {
    // this.modalService.modalAction(this.modalData);
    this.closeModal();
  }
  closeModal() {
    this.dialogRef.close();
  }
  deleteData() {
    const formData = this.notificationDetailsForm.value
    if(formData.messageType = 'Notification'){
      this.service.deleteNotification(this.selectedId).then((res:any)=>{
        console.log('deleteNotification', res)
      })
    }
    if(formData.messageType = 'News'){
      this.service.deleteNews(this.selectedId).then((res:any)=>{
        console.log('deletenews', res)
      })
    }
    this.dialogRef.close();
  }

  onFormSubmitNotificationDetails(type) {
    const formData = this.notificationDetailsForm.value
    console.log(type)
    if(type == 'save'){
      formData['publish'] = false,
      formData['isactive'] = false
      console.log("Form data", formData)
      if(formData['messageType'] = "Notification"){
        this.service.createNotification(formData).then((res:any)=>{
          console.log('newNotification', res)
          this.newNotification= res
        })
      }
      if(formData['messageType'] = "News"){
        console.log("Form data", formData)
        this.service.createNews(formData).then((res:any)=>{
          console.log('createNews', res)
          this.createNews= res
        })
      }
     
    }
    if(type == 'saveAndPublish'){
      formData['publish'] = true,
      formData['isactive'] = true
      console.log("Form data", formData)
      if(formData['messageType'] = "Notification"){
        this.service.createNotification(formData).then((res:any)=>{
          console.log('newNotification', res)
          this.newNotification= res
        })
      }
      if(formData['messageType'] = "News"){
        this.service.createNews(formData).then((res:any)=>{
          console.log('createNews', res)
          this.createNews= res
        })
      }
    }
    this.dialogRef.close();
  }
  updateNotificationData(){
    this.notificationDetailsForm.patchValue({
      date: this.selectedItem.date,
      messagetype: this.selectedItem.messageType,
      messagedescription: this.selectedItem.messageDescription
    })
  }
  updateNotification(){
    const formData = this.notificationDetailsForm.value
    this.service.updateNotification(this.selectedId, formData).then((res:any)=>{
      console.log('updateNotification', res)
    })
  }
  
}
