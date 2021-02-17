import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  gettingData = new Subject();

  constructor() { }

  transferData(value: any){
    this.gettingData.next(value);
   }
}
