import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataModalComponent } from 'src/app/reusable/components/data-modal/data-modal.component';
import { WebRequestService } from 'src/services/web-request.service';

@Component({
  selector: 'ev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public matDialog: MatDialog, public service: WebRequestService,) { }

  ngOnInit(): void {
  }
  openDialog() {
    // console.log("feedback popup")
    const dialogConfig = new MatDialogConfig();
    const modalId = 'modal05';
    dialogConfig.disableClose = true;
    // dialogConfig.height = "470px";
    dialogConfig.width = "500px";
    dialogConfig.data = {
      modalId: modalId,
    };
    const dialogRef = this.matDialog.open(DataModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          //console.log("feedback output :", data.feedback_msg);
          this.service.sendFeedbacktoEmail(data).then((res: any) => {
            //if(res)console.log(res);
          })
        }
      }
    );
  }
}
