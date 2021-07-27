import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from 'src/app/reusable/components/data-modal/data-modal.component';

@Component({
  selector: 'ev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    console.log("feedback popup")
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal05';
    dialogConfig.disableClose = false;
    // dialogConfig.height = "470px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      modalId: modalId,
    };
    const dialogRef = this.matDialog.open(DataModalComponent, dialogConfig);
  }
}
