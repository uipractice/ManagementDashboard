import { WebRequestService } from './../../services/web-request.service';
import { CommonService } from './../../services/common.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from '../reusable/components/data-modal/data-modal.component';
import { NewsNotificationModalComponent } from '../reusable/components/news-notification-modal/news-notification-modal.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'ev-create-news-notifications',
  templateUrl: './create-news-notifications.component.html',
  styleUrls: ['./create-news-notifications.component.scss']
})
export class CreateNewsNotificationsComponent {
  headerDataLoaded: any = false;
  allNotification: any;
  totalNotification: any;
  msgType: any;
  Content: any;
  toggleSwitch: boolean;
  allNotificationInfo: any = [];
  totalData = [];
  constructor(public matDialog: MatDialog,
    public commonService: CommonService, public service: WebRequestService,
    @Inject(DOCUMENT) private _document: Document
    ) { }

  ngOnInit(): void {
    this.service.getSummeryCount().then((res) => {
      this.commonService.transferData(res['data']['result']);
      this.headerDataLoaded = true;
    });
    // this.newsNotificationData();
    this.allNewsAndnotification();
  }

  // newsNotificationData = () => {
  //   this.service.getNewsData().then((res: any) => {
  //     this.totalData =[]
  //     console.log('allNewsAndNotification', res)
  //     this.totalData.push(...res);
  //   })
  // }

  allNewsAndnotification = () => {
    this.service.getNotificationData().then((res: any) => {
      this.totalData = res.flat();
      console.log('total data',this.totalData)
    })
  }

  createNewsAndNotification() {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal03';
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "620px";
    dialogConfig.data = {
      modalId: modalId,
    };
    const dialogRef = this.matDialog.open(NewsNotificationModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(value)
      setTimeout(() => {
        this.allNewsAndnotification();
      }, 2000);
    });
  }

  updateSelectedData(id, data) {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal05';
    const selectedId = id;
    const selectedItem = data
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "620px";
    dialogConfig.data = {
      modalId: modalId,
      selectedItem: selectedItem,
      selectedId: selectedId,
      // formData: formData,
    };
    const dialogRef= this.matDialog.open(NewsNotificationModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(value)
      setTimeout(() => {
        this.allNewsAndnotification();
      }, 2000);
    });
  }
  deleteNotificationPopup(id, type) {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal04';
    const selectedId = id;
    const selectedType = type;
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "400px";
    dialogConfig.data = {
      modalId: modalId,
      selectedId: selectedId,
      selectedType: selectedType
    };
    const dialogRef = this.matDialog.open(NewsNotificationModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => {
      console.log(value)
      setTimeout(() => {
        this.allNewsAndnotification();
      }, 2000);
    });
  }

}
