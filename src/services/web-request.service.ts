// ---------------------------------------------------------------------------------------
// AUTHOR : VINAYAKA D
// ---------------------------------------------------------------------------------------
// PAGE : WEB-REQUEST.SERVICE.TS
// ---------------------------------------------------------------------------------------
// COMMENT: THIS PAGE IS TO CREATE THE WEB SERVICES AND PROVIDERS
// ---------------------------------------------------------------------------------------
// LAST MODIFIED : 24/03/2020
// ---------------------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpEventType,
  HttpEvent,
} from '@angular/common/http';
import { UrlConstants } from 'src/constants/url-constants';
import { map, tap, last } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  _urls: any = UrlConstants.ENDPOINTS;

  public progressSource = new BehaviorSubject<number>(0);

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = this._urls.DEV_URL;
  }

  async getProfileData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_USERS}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }

  async setEmpDetails(data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.ROOT_URL}${this._urls.ADD_USER}`, data)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }

  async deleteEmpDetails(id) {
    return new Promise((resolve, reject) => {
      this.http
        .delete(`${this.ROOT_URL}${this._urls.DELETE_EMP}/${id}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
}
// payment

// this.service.getUserProfileDetails((res) => {
//   console.log(res);
//   if (res['statusCode'] === 200) {
//   } else {
//   }
// });
