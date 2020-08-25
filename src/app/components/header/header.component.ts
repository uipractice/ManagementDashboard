import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

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
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  arrHours: Hours[] = [];
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
}
