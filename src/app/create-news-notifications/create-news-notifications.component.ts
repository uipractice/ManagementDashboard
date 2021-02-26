import { WebRequestService } from './../../services/web-request.service';
import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from '../reusable/components/data-modal/data-modal.component';

@Component({
  selector: 'ev-create-news-notifications',
  templateUrl: './create-news-notifications.component.html',
  styleUrls: ['./create-news-notifications.component.scss']
})
export class CreateNewsNotificationsComponent {
  headerDataLoaded: any = false;
  constructor(public matDialog: MatDialog, 
     public commonService: CommonService, public service: WebRequestService,) { }

  ngOnInit(): void {    
      this.service.getSummeryCount().then((res) => {
        this.commonService.transferData(res['data']['result']);
        this.headerDataLoaded = true;
      });
  }
  createNews() {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal03';   
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "620px";
    dialogConfig.data = {
      modalId: modalId,
    };
   this.matDialog.open(DataModalComponent, dialogConfig);
  }
}
