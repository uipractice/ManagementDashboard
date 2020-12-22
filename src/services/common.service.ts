import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedRoute = new Subject();

  constructor() { }

  setSelectedRout(value: any){
    this.selectedRoute.next(value);
   }
}
