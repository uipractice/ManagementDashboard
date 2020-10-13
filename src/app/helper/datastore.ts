import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class Data {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private totalCost = new BehaviorSubject<any>(0);
  public storage: any;
  public conditionFlag: any;
  public _errorMessage: any;
  public _passingData: any;
  public _accessToken: any;
  public _emailVerified: boolean;
  public emailEvent: any;
  public constructor() {
    this.emailEvent = new BehaviorSubject<any>(this._emailVerified);
  }

  sendEvent(data: any) {
    this.totalCost.next(data);
  }

  getEvent(): Observable<any> {
    return this.totalCost.asObservable();
  }
  async storeData(storename, data) {
    localStorage.setItem(storename, JSON.stringify(data));
  }

  async storeSingleData(storename, data) {
    localStorage.setItem(storename, data);
  }

  eventChange() {
    this.emailEvent.next(this._emailVerified);
  }

  async getStoreData(storename) {
    return new Promise((resolve, reject) => {
      localStorage.getItem(storename)
        ? resolve(localStorage.getItem(storename))
        : resolve(false);
    }).catch((err) => rejects(err));
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
