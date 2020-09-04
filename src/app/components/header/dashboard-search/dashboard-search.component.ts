import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss']
})
export class DashboardSearchComponent implements OnInit {
  isShow = true;
  toggleDropdown(){
    this.isShow = !this.isShow;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
