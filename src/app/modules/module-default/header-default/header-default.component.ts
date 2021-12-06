import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ev-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss'],
})
export class HeaderDefaultComponent implements OnInit {
  @Input() summeryData: any;
  @Input() summeryDatanew: any;
  dashboardArray: any[];
  constructor() {}

  ngOnInit(): void {
    this.dashboardArray = [...this.summeryData['data'],...this.summeryDatanew['data']]
  }
}
