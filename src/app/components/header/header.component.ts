import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebRequestService } from 'src/services/web-request.service';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { '(document:click)': 'onClick()' },
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
  hoursCount: any;
  newsLetterData: any = [];
  toggleDropdown() {
    // $event.stopPropagation();
    this.isShow = !this.isShow;
    // this.isOpen = true;
    // this.isSearch = true;
  }
  toggleDowncontent() {
    this.isOpen = !this.isOpen;
    // this.isShow = true;
    // this.isSearch = true;
  }
  toggledownSearch(e) {
    e.stopPropagation();
    this.isSearch = !this.isSearch;
    // this.isShow = true;
    // this.isOpen = true;
  }
  //   GetChildData(data){
  //     console.log(data);
  //     this.isparentSearch = data;
  //  }

  onClick() {
    // this.isShow = true;
    // this.isOpen = true;
    this.isSearch = true;
  }
  constructor(
    private httpService: HttpClient,
    private router: Router,
    public service: WebRequestService, public commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.commonService.gettingData.subscribe(res =>{
      this.headerCount = res;
      this.headerCountLoaded = true;
    })
    if (sessionStorage.getItem('userInfo')) {
      this.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
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
         
        });
      },
      (err: HttpErrorResponse) => {
      }
    );

    for (var i = 0; i < 10; i++) {
      this.newsLetterData.push({
        title:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      });
    }
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
