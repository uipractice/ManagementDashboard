import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ev-graph-header',
  templateUrl: './graph-header.component.html',
  styleUrls: ['./graph-header.component.scss']
})
export class GraphHeaderComponent implements OnInit {
  @Input() title: any;
  @Input() month: any;
  isDesiable: boolean;
  desiableMonth: boolean;
  constructor() { }

  ngOnInit(): void {
    // console.log('month', this.month)
    if(this.month == undefined){
      this.desiableMonth = true;
    }else {
      this.desiableMonth = false;
    }

    if(this.title == 'News and Events') {
      this.isDesiable = false
    }else {
      // this.isDesiable = true
    }
  }

}
