import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

interface Icon {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'ev-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  arrIcons: Icon[] = [];
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.httpService.get('assets/side_nav.json').subscribe(
      data => {
        this.arrIcons = data as Icon[];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrIcons);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
