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
  startDate: Date;
  createNews: any;
  newNotification: any;
  newNotificationForm: any;
  notificationDetailsForm: FormGroup;
  isnotificationDetailsForm: boolean = true;
  selectedItem: any;
  selectedType: any;
  constructor(public dialogRef: MatDialogRef<NewsNotificationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService, public service: WebRequestService, private fb: FormBuilder) {
    this.notificationDetailsForm = fb.group({
      'messageDescription': [null, Validators.required],
      'messageType': [null, Validators.required],
      'date': [null, Validators.required]
    })
    this.startDate = new Date();
  }

  ngOnInit(): void {
    this.modalId = this.modalData.modalId
    this.data = this.modalData.modalData
    this.selectedId = this.modalData.selectedId
    this.selectedType = this.modalData.selectedType
    this.selectedItem = this.modalData.selectedItem
    console.log('selectedItem', this.selectedItem)
    if (this.selectedItem) {
      this.updateNotificationData();
    }
  }

  actionFunction() {
    // this.modalService.modalAction(this.modalData);
    this.closeModal();
  }
  closeModal() {
    this.dialogRef.close(false);
  }

  onFormSubmit(type) {
    const formData = this.notificationDetailsForm.value
    console.log(formData)
    if (type == 'save') {
      formData['publish'] = false,
        formData['isActive'] = false
      console.log("Form data", formData)
      if (formData['messageType'] = "Notification") {
        this.service.createNotification(formData).then((res: any) => {
          console.log('newNotification', res)
          this.newNotification = res
        })
      } else if (formData['messageType'] = "News") {
        this.service.createNews(formData).then((res: any) => {
          console.log('createNews', res)
          this.createNews = res
        })
      }
    } else if (type == 'saveAndPublish') {
      formData['publish'] = true,
        formData['isActive'] = true
      if (formData['messageType'] = "Notification") {
        this.service.createNotification(formData).then((res: any) => {
          console.log('newNotification', res)
          this.newNotification = res
        })
      } else if (formData['messageType'] = "News") {
        this.service.createNews(formData).then((res: any) => {
          console.log('createNews', res)
          this.createNews = res
        })
      }
    }
    this.dialogRef.close(true);
  }


  onSave() {
    const formData = this.notificationDetailsForm.value
    formData['publish'] = false,
      formData['isActive'] = false
    if (formData.messageType == 'News') {
      this.service.createNews(formData).then((res: any) => {
        console.log('createNews', res)
        this.createNews = res
      })
    } else {
      this.service.createNotification(formData).then((res: any) => {
        console.log('newNotification', res)
        this.newNotification = res
      })
    }
    this.dialogRef.close(true);
  }
  onSaveAndPublish() {
    const formData = this.notificationDetailsForm.value
    formData['publish'] = true,
      formData['isActive'] = true
    if (formData.messageType == 'News') {
      this.service.createNews(formData).then((res: any) => {
        console.log('createNews', res)
        this.createNews = res
      })
    } else {
      this.service.createNotification(formData).then((res: any) => {
        console.log('newNotification', res)
        this.newNotification = res
      })
    }

    this.dialogRef.close(true);
  }

  deleteData() {
    if (this.selectedType == 'Notification') {
      this.service.deleteNotification(this.selectedId).then((res: any) => {
        console.log('deleteNotification', res)
      })
    } else {
      this.service.deleteNews(this.selectedId).then((res: any) => {
        console.log('deletenews', res)
      })
    }
    this.dialogRef.close(true);
  }
  updateNotificationData() {
    this.notificationDetailsForm.patchValue({
      date: this.selectedItem.date,
      messageType: this.selectedItem.messageType,
      messageDescription: this.selectedItem.messageDescription,
      isActive: this.selectedItem.isActive,
      publish: this.selectedItem.publish
    })
  }

  onUpdateSave() {
    const formData = this.notificationDetailsForm.value
    formData['publish'] = false,
    formData['isActive'] = false
    if (formData.messageType == 'News') {
      this.service.updateNews(this.selectedId, formData).then((res: any) =>{
        console.log('updateNotification', res)
      })
    } else {
      this.service.updateNotification(this.selectedId, formData).then((res: any) => {
        console.log('updateNotification', res)
      })
    }
    this.dialogRef.close(true);
  }
  onUpdatePublish() {
    const formData = this.notificationDetailsForm.value
    formData['publish'] = true,
    formData['isActive'] = true 
    if (formData.messageType == 'News') {
      this.service.updateNews(this.selectedId, formData).then((res: any) =>{
        console.log('updateNotification', res)
      })
    } else{
        this.service.updateNotification(this.selectedId, formData).then((res: any) => {
        console.log('updateNotification', res)
      })
    }
    this.dialogRef.close(true);
  }
  // updateNotification(){
  //   const formData = this.notificationDetailsForm.value
  //   this.service.updateNotification(this.selectedId, formData).then((res:any)=>{
  //     console.log('updateNotification', res)
  //   })
  // }

}
