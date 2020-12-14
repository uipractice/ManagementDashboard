import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/services/web-request.service';

@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // host: { '(document:click)': 'onClick()' },
})
export class HeaderComponent implements OnInit {
  headerCount: any = {};
  headerCountLoaded: any = false;
  isShow = true;
  isOpen = true;
  isSearch = true;
  isparentSearch: any;
  notificationCount: any;
  userInfo: any;
  currentUser = sessionStorage.getItem('user');
  hoursCount: any;
  toggleDropdown() {
    // $event.stopPropagation();
    this.isShow = !this.isShow;
    this.isOpen = true;
    this.isSearch = true;
  }
  toggleDowncontent() {
    this.isOpen = !this.isOpen;
    this.isShow = true;
    this.isSearch = true;
  }
  toggledownSearch(e) {
    e.stopPropagation();
    this.isSearch = !this.isSearch;
    this.isShow = true;
    this.isOpen = true;
  }
  //   GetChildData(data){
  //     console.log(data);
  //     this.isparentSearch = data;
  //  }

  // onClick() {
  //   this.isShow = true;
  //   this.isOpen = true;
  //   this.isSearch = true;
  // }
  constructor(
    private httpService: HttpClient,
    private router: Router,
    public service: WebRequestService
  ) {}

  ngOnInit(): void {
    this.service.getSummeryCount().then((res) => {
      console.log(res);
      if (res['statusCode'] === 200) {
        this.headerCount = res['data']['result'];
        console.log(this.headerCount);
        this.headerCountLoaded = true;
      }
    });
    if (localStorage.getItem('userInfo')) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }

    this.httpService.get('assets/header_count.json').subscribe(
      (res) => {
        // this.arrHours = data; // FILL THE ARRAY WITH DATA.
        const data: any = res;
        // this.hoursCount = res[0].hoursCount;
        data.forEach((e) => {
          if (e.hoursCount) {
            this.hoursCount = e.hoursCount;
            // console.log(e.hoursCount);
          }
          if (e.notification) {
            this.notificationCount = e.notification;
          }
          // this.hoursCount = element.hoursCount;
          // console.log(this.hoursCount);
        });
        console.log(this.hoursCount);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );

    //   getcustomcss(){
    //     if(this.arrHours[i]== this.arrHours[this.arrHours.length-1]){
    //     return 'class1';
    //   }
    // }
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
