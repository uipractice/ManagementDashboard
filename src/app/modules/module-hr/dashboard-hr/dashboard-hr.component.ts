import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ev-dashboard-hr',
  templateUrl: './dashboard-hr.component.html',
  styleUrls: ['./dashboard-hr.component.scss']
})
export class DashboardHrComponent implements OnInit {
  summeryData:any
  constructor() { }

  ngOnInit(): void {
    this.summeryData = [
      {title: "HeadCount", count: 709, flag: 1, staticAvailable: false, icon: "people.svg"},
      {title: "Onboarded", count: 30, flag: 1, staticAvailable: false, icon: "onboarded.svg"},
      {title: "Seperated", count: 10, flag: 1, staticAvailable: false, icon: "Seperated.svg"},
      {title: "Billable ", count: 51, flag: 1, staticAvailable: false, icon: "billable.svg"},
      {title: "Non Billable", count: 125, flag: 1, staticAvailable: false, icon: "non-billable.svg"}
      ];
  }

}
