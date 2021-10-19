// ---------------------------------------------------------------------------------------
// AUTHOR : VINAYAKA D
// ---------------------------------------------------------------------------------------
// PAGE : WEB-REQUEST.SERVICE.TS
// ---------------------------------------------------------------------------------------
// COMMENT: AUTHENTICATION CREATION AND REFRESH AND ACCESSTOKEN MANAGEMENT
// ---------------------------------------------------------------------------------------
// LAST MODIFIED : 24/03/2020
// ---------------------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { WebRequestService } from './web-request.service';
import { Router } from '@angular/router';
import { shareReplay, tap } from 'rxjs/operators';

import { UrlConstants } from 'src/constants/url-constants';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _urls: any = UrlConstants.ENDPOINTS;

  readonly ROOT_URL;

  constructor(
    private webService: WebRequestService,
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) {
    this.ROOT_URL = this._urls.DEV_URL;
  }
  async authenticate() {
    if (this.cookieService.check('x-access-token')) {

      const promise = await new Promise((resolve, reject) => {
        this.http
          .get(`${this.ROOT_URL}${this._urls.AUTHENTICATE_USER}`, {
            headers: new HttpHeaders({
              'auth-header': this.cookieService.get('x-access-token'),
            }),
          })
          .toPromise()
          .then((res) => {
            // Success
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }

  async login(data) {
    let cors = 'https://cors-anywhere.herokuapp.com/';
    // if (this.cookieService.check('ka-notification-token')) {
    //   data.browserToken = this.cookieService.get('ka-notification-token');
    // }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };

    const promise = await new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.ROOT_URL}${this._urls.USER_LOGIN}`,
          JSON.stringify(data),
          options
        )
        .toPromise()
        .then((res) => {
          // Success
          if (res['statusCode'] === 200) {
            this.setSession('login', res['token'], res['refreshToken']);
            resolve(res);
          } else {
            //BEGIN : code added by sk to recieve wrong credntials msg
            if(res['statusCode'] === 401 || res['auth'] == false){
              resolve(res);
            }
            //END : code added by sk
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
  public isAuthenticate(): boolean {
    // method return true or false based on login credential
    const userData = sessionStorage.getItem('userInfo');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }
  async registrationLogin(data: any) {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };

    const promise = await new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.ROOT_URL}${this._urls.REGISTER_USER}`,
          JSON.stringify(data),
          options
        )
        .toPromise()
        .then((res) => {
          // Success
          resolve(res);
          this.setSession(
            'login',
            res['result']['token'],
            res['result']['refreshToken']
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }

  logout() {
    this.removeSession();
    localStorage.clear();
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    // return sessionStorage.getItem('x-access-token');
    return this.cookieService.get('x-access-token');
  }

  getRefreshToken() {
    // return sessionStorage.getItem('x-refresh-token');
    return this.cookieService.get('x-refresh-token');
  }

  getUserId() {
    // return sessionStorage.getItem('user-id');
    return this.cookieService.get('user-id');
  }

  setAccessToken(accessToken: string) {
    // sessionStorage.setItem('x-access-token', accessToken);
    this.cookieService.set('x-access-token', accessToken);
  }
  setRefreshToken(refreshToken: string) {
    // sessionStorage.setItem('x-refresh-token', refreshToken);
    this.cookieService.set('x-refresh-token', refreshToken);
  }
  async setSession(userId: string, accessToken: string, refreshToken: string) {
  
    // sessionStorage.setItem('user-id', userId);
    // sessionStorage.setItem('x-access-token', accessToken);
    // sessionStorage.setItem('x-refresh-token', refreshToken);
    this.cookieService.set('user-id', userId);
    this.cookieService.set('x-access-token', accessToken);
    this.cookieService.set('x-refresh-token', refreshToken);
  }

  private removeSession() {
    // sessionStorage.removeItem('user-id');
    // sessionStorage.removeItem('x-access-token');
    // sessionStorage.removeItem('x-refresh-token');

    this.cookieService.delete('user-id');
    this.cookieService.delete('x-access-token');
    this.cookieService.delete('x-refresh-token');
  }

  getNewAccessToken() {
    let cors = 'https://cors-anywhere.herokuapp.com/';
    const headData = 'bearer ' + sessionStorage.getItem('x-access-token');
    const headers = new HttpHeaders({
      Authorization: headData,
    });
    const data = {
      // accessToken: sessionStorage.getItem('x-access-token'),
      // refreshToken: sessionStorage.getItem('x-refresh-token'),
      accessToken: this.cookieService.get('x-access-token'),
      refreshToken: this.cookieService.get('x-refresh-token'),
      expiresIn: '300000',
    };

    return this.http
      .post(
        `${this.ROOT_URL}${this._urls.REFRESH_ACCESS_TOKEN}`,
        JSON.stringify(data),
        {
          headers: {
            Authorization: headData,
            'Content-Type': 'application/json',
          },
          observe: 'response',
        }
      )
      .pipe(
        tap((res: HttpResponse<any>) => {
          if (res['body']['result']) {
            this.setAccessToken(res['body']['result']['accessToken']);
            this.setRefreshToken(res['body']['result']['refreshToken']);
          } else {
            if (res['body']['statusCode'] === 400) {
            }
          }
          if (res.body.statusCode === 500) {
            this.router.navigateByUrl('/');
          }
        })
      );
  }

  // FORGOT PASSWORD API Added by lakshmi

  async forgotPassword(userName) {
    const cors = 'https://cors-anywhere.herokuapp.com/';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers: headers };

    const promise = await new Promise((resolve, reject) => {
      this.http
        .post(
          `${this.ROOT_URL}${this._urls.FORGOT_PASSWORD}/${userName}`,
          options
        )
        .toPromise()
        .then((res) => {
          // Success
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
    return promise;
  }
}
