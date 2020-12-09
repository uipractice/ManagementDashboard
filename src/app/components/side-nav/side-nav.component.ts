import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface Icon {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'ev-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  arrIcons: Icon[] = [];
  @Output() navigatoinChangeEvent = new EventEmitter();
  constructor(private httpService: HttpClient, private router: Router) {}

  navigatoinChange(data) {
    // this.navigatoinChangeEvent.emit(data);
    this.router.navigate([data]);
  }
  ngOnInit(): void {
    this.httpService.get('assets/side_nav.json').subscribe(
      (data) => {
        this.arrIcons = data as Icon[]; // FILL THE ARRAY WITH DATA.
        // console.log(this.arrIcons);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
