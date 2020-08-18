import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class Data {
  public data: any;
  public constructor() {
    // this.emailEvent = new BehaviorSubject<any>(this._emailVerified);
  }
}
