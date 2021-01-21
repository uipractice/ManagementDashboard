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
      // //console.log(this._commonHeader);

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
            console.log('auth res', res);
            resolve(res);

            // //console.log(res['result']['custID'])

            //console.log('LOGGED IN!');
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
  }

  async login(data) {
    //console.log(`${this.ROOT_URL}${this._urls.USER_LOGIN}`);
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
          console.log(res);
          if (res['statusCode'] === 200) {
            this.setSession('login', res['token'], res['refreshToken']);
            resolve(res);
          } else {
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
    const userData = localStorage.getItem('userInfo');
    if (userData) {
      return true;
    } else {
      return false;
    }
  }
  async registrationLogin(data: any) {
    //console.log(`${this.ROOT_URL}${this._urls.REGISTER_USER}`);
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
          // //console.log(res['result']['custID'])
          this.setSession(
            'login',
            res['result']['token'],
            res['result']['refreshToken']
          );
          //console.log('LOGGED IN!');
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
    //console.log(userId, accessToken, refreshToken);
    // sessionStorage.setItem('user-id', userId);
    // sessionStorage.setItem('x-access-token', accessToken);
    // sessionStorage.setItem('x-refresh-token', refreshToken);
    console.log(accessToken);
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
    //console.log('aclling new refresh token');
    //console.log(`${this.ROOT_URL}${this._urls.REFRESH_ACCESS_TOKEN}`);
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
          //console.log(res);
          if (res['body']['result']) {
            this.setAccessToken(res['body']['result']['accessToken']);
            this.setRefreshToken(res['body']['result']['refreshToken']);
            //console.log(res['body']['result']['accessToken']);
            //console.log(res['body']['result']['refreshToken']);
          } else {
            if (res['body']['statusCode'] === 400) {
              //console.log('login again');
            }
          }
          //console.log(res.body);
          if (res.body.statusCode === 500) {
            this.router.navigateByUrl('/');
          }
        })
      );
  }

  // FORGOT PASSWORD API Added by lakshmi

  async forgotPassword(userName) {
    //console.log(`${this.ROOT_URL}${this._urls.FORGOT_PASSWORD}`);
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
