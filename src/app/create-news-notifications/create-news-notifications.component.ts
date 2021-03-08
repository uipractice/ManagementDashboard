import { WebRequestService } from './../../services/web-request.service';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from '../reusable/components/data-modal/data-modal.component';
import { NewsNotificationModalComponent } from '../reusable/components/news-notification-modal/news-notification-modal.component';

@Component({
  selector: 'ev-create-news-notifications',
  templateUrl: './create-news-notifications.component.html',
  styleUrls: ['./create-news-notifications.component.scss']
})
export class CreateNewsNotificationsComponent {
  headerDataLoaded: any = false;
  allNewsAndNotification :any;
  allNotification: any;
  totalNotification: any;
  allNotificationInfo: any=[];
  totalData = [];
  constructor(public matDialog: MatDialog, 
     public commonService: CommonService, public service: WebRequestService,) { }

  ngOnInit(): void {    
      this.service.getSummeryCount().then((res) => {
        this.commonService.transferData(res['data']['result']);
        this.headerDataLoaded = true;
      });

      this.newsNotificationData();
      this.notificationData();
  }

  newsNotificationData = ()=>{
      this.service.getNewsData().then((res:any)=>{
        console.log('allNewsAndNotification', res)
        // this.allNewsAndNotification = res
        this.totalData.push(...res);
      })
      
  }
  
  notificationData = ()=>{
    this.service.getNotificationData().then((res:any)=>{
      console.log('allNotification', res )
      this.totalData.push(...res);
    })
    console.log('totalData', this.totalData)
  }
  
  // updateNotification = () =>{
  //   this.service.updateNotification().then((res:any)=>{
  //     console.log('updateNotification', res)
  //     this.updateNotification = res
  //   })
  // }
  
  createNewsPopup() {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal03';   
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "620px";
    dialogConfig.data = {
      modalId: modalId,
    };
   this.matDialog.open(NewsNotificationModalComponent, dialogConfig);
  }

  deleteNewsPopup(id) {
    const dialogConfig = new MatDialogConfig();
    const index = 1;
    const modalId = 'modal04';   
    const selectedId = id;   
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "400px";
    dialogConfig.data = {
      modalId: modalId,
      selectedId: selectedId,
    };
   this.matDialog.open(NewsNotificationModalComponent, dialogConfig);
  //  this.deleteNotification(index);
   console.log('delete:', id)
  }
}
