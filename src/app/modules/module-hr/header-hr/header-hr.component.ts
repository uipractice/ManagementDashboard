import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ev-header-hr',
  templateUrl: './header-hr.component.html',
  styleUrls: ['./header-hr.component.scss']
})
export class HeaderHrComponent implements OnInit {
  @Input() summeryData: any;
  constructor() { }

  ngOnInit(): void {
    console.log('this.summeryData',this.summeryData);
  }

}
