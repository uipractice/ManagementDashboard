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
import { CookieService } from 'ngx-cookie-service';
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
import { Data } from '../app/helper/datastore';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  _urls: any = UrlConstants.ENDPOINTS;

  public progressSource = new BehaviorSubject<number>(0);

  readonly ROOT_URL;
  _commonHeader: any;
  _herderOption: any;
  _header: any;
  _imageherderOption: any;
  _imageHeader: any;
  _accessToken: any;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private data: Data
  ) {
    this.ROOT_URL = this._urls.DEV_URL;
  }

  setToken() {
    const cookieExists: boolean = this.cookieService.check('x-access-token');
    // //console.log(cookieExists);
    if (cookieExists) {
      this._accessToken = this.cookieService.get('x-access-token');

      this._commonHeader = this._accessToken;
      // //console.log(this._commonHeader);
      this._herderOption = new HttpHeaders({
        'auth-header': this._commonHeader,
      });

      this._header = { headers: this._herderOption };

      this._commonHeader = this._accessToken;
      // //console.log(this._commonHeader);
      this._imageherderOption = new HttpHeaders({
        'auth-header': this._commonHeader,
      });

      this._imageHeader = { headers: this._imageherderOption };
    } else {
      // //console.log('has access token' + this.data._accessToken);

      this._accessToken = this.data._accessToken;

      this._commonHeader = this._accessToken;
      // //console.log(this._commonHeader);
      this._herderOption = new HttpHeaders({
        Authorization: this._commonHeader,
      });

      this._header = { headers: this._herderOption };

      this._commonHeader = 'bearer' + this._accessToken;
      // //console.log(this._commonHeader);
      this._imageherderOption = new HttpHeaders({
        Authorization: this._commonHeader,
      });

      this._imageHeader = { headers: this._imageherderOption };
      // alert(this.data._accessToken);
    }
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
  // GET_GRAPH_DATA_ACCOUNTS

  async getAccountGraphData() {
    this.setToken();
    console.log(this._header);
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `${this.ROOT_URL}${this._urls.GET_GRAPH_DATA_ACCOUNTS}`,
          this._header
        )
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }

  // GET_SUMMERY_COUNT
  async getSummeryCount() {
    this.setToken();
    console.log(this._header);
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_SUMMERY_COUNT}`, this._header)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  // GET_GRAPH_DATA_PRACTICE

  async getPracticeGraphData() {
    this.setToken();
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `${this.ROOT_URL}${this._urls.GET_GRAPH_DATA_PRACTICE}`,
          this._header
        )
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

  // Hr dashboard api
  async getHrHeaderData() {
    // this.setToken();
    // console.log(this._header);
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_HR_HEADER_DATA}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getOnboardAndSeperateData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_HR_ONBOARDED_SEPERATED_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getAccountWiseEmployeeData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_HR_ACCOUNT_WISE_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getHeadcountData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_HR_HEADCOUNT_DEMOGRAPHIC_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getTopThreeReasonData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_TOP_THREE_REASON_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }

  async getEmployeeAttritionData() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.ROOT_URL}${this._urls.GET_EMPLOYEE_ATTRITION_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getVoluntaryAnalysisData() { 
    return new Promise((resolve, reject) => {
      this.http
        // .get(`http://localhost:80/api/hr/getVoluntaryAttritionData`)
        .get(`${this.ROOT_URL}${this._urls.GET_VOLUNTARY_ANALYSIS_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getEmployeeEngagementData() {
    return new Promise((resolve, reject) => {
      this.http
        // .get(`http://localhost:80/api/hr/getEmployeeEngagement`)
        .get(`${this.ROOT_URL}${this._urls.GET_EMPLOYEE_ENGAGEMENT_Data}`)
        .toPromise()
        .then((response) => {
          // //console.log(response);
          resolve(response);
        });
    }).catch((err) => console.error(err));
  }
  async getPostEngagementData() {
    return new Promise((resolve, reject) => {
      this.http
        // .get(`http://localhost:80/api/hr/getPostEngagement`)
        .get(`${this.ROOT_URL}${this._urls.GET_POST_ENGAGEMENT_Data}`)
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
