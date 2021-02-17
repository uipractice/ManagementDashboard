import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ModalActionsService {

  constructor(
  ) { }

  modalAction(modalData: any) {
    switch (modalData.name) {
      case "logout":
        // this.logout(modalData);
        break;
      
      case "deleteProduct":
        // this.deleteProduct(modalData);
        break;
        
      default:
        break;
    }
  }

}
