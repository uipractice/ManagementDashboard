import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/services/modal-actions.service';
import { WebRequestService } from 'src/services/web-request.service';

@Component({
  selector: 'ev-news-notification-modal',
  templateUrl: './news-notification-modal.component.html',
  styleUrls: ['./news-notification-modal.component.scss']
})
export class NewsNotificationModalComponent implements OnInit {
  data: any;
  modalId: any;
  selectedId: any;
  constructor( public dialogRef: MatDialogRef<NewsNotificationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService, public service: WebRequestService,) { }

  ngOnInit(): void {
    this.modalId = this.modalData.modalId
    this.data = this.modalData.modalData
    this.selectedId = this.modalData.selectedId
  }
  actionFunction() {
    // this.modalService.modalAction(this.modalData);
    this.closeModal();
  }
  closeModal() {
    this.dialogRef.close();
    this.service.getNewsData().then((res:any)=>{
      console.log('allNewsAndNotification', res)
      // this.allNewsAndNotification = res
    })
    this.service.getNotificationData().then((res:any)=>{
      console.log('allNotification', res )
    })
  }
  deleteData() {
    // alert('test' + this.selectedId);
    this.service.deleteNotification(this.selectedId).then((res:any)=>{
      console.log('deleteNotification', res)
      // this.deleteNotification = res
    })
    
  }

}
