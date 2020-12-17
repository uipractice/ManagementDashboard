import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from 'src/services/modal-actions.service';

@Component({
  selector: 'ev-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DataModalComponent>,
    @Inject(MAT_DIALOG_DATA) private modalData: any,
    private modalService: ModalActionsService) { }

  ngOnInit(): void {
  }
  actionFunction() {
    // this.modalService.modalAction(this.modalData);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
