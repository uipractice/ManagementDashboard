import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from '../reusable/components/data-modal/data-modal.component';

@Component({
  selector: 'ev-create-news-notifications',
  templateUrl: './create-news-notifications.component.html',
  styleUrls: ['./create-news-notifications.component.scss']
})
export class CreateNewsNotificationsComponent {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  createNews() {
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal03';   
    dialogConfig.disableClose = false;
    dialogConfig.height = "400px";
    dialogConfig.width = "598px";
    dialogConfig.data = {
      modalId: modalId,
    };
   this.matDialog.open(DataModalComponent, dialogConfig);
  }
}
