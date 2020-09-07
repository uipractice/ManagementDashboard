import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface Hours {
  id: number;
  desc: string;
  count: string;
  value: number;
  arrowFlag: boolean;
}

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
  arrHours: Hours[] = [];
  currentUser =  localStorage.getItem("user");
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

    this.httpService.get('assets/header_count.json').subscribe(
      data => {
        this.arrHours = data as Hours[];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrHours);
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
