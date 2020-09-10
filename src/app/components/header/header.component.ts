import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

// interface Hours {
//   id: number;
//   desc: string;
//   count: string;
//   value: number;
//   arrowFlag: boolean;
// }

@Component({
  selector: 'ev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    "(document:click)": "onClick()"
  }
})
export class HeaderComponent implements OnInit {
  isShow = true;
  isOpen = true;
  notificationCount: any;
  currentUser =  localStorage.getItem("user");
  hoursCount: any;
  toggleDropdown($event){
    $event.stopPropagation();
    this.isShow = !this.isShow;
  }
  toggleDowncontent($event){
    $event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  onClick() {
    this.isShow = true;
    this.isOpen = true;
  }
  constructor(private httpService: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.httpService.get('assets/header_count.json').subscribe( res => {
        // this.arrHours = data; // FILL THE ARRAY WITH DATA.
        const data: any = res;
        // this.hoursCount = res[0].hoursCount;
        data.forEach(e => {
          if (e.hoursCount) {
            this.hoursCount = e.hoursCount;
            // console.log(e.hoursCount);
          }
          if (e.notification){
            this.notificationCount = e.notification;
          }
        // this.hoursCount = element.hoursCount;
        // console.log(this.hoursCount);
        });
        // console.log(this.hoursCount);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );



  //   getcustomcss(){
  //     if(this.arrHours[i]== this.arrHours[this.arrHours.length-1]){
  //     return 'class1';
  //   }
  // }

  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    }
}
