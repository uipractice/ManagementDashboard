import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss'],
  host: {'(document:click)': 'onClick()'}
})
export class DashboardSearchComponent implements OnInit {
  isShow = true;
  toggleDropdown($event){
    $event.stopPropagation();
    this.isShow = !this.isShow;
  }
  onClick() {
    this.isShow = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
