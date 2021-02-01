import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ev-graph-header',
  templateUrl: './graph-header.component.html',
  styleUrls: ['./graph-header.component.scss']
})
export class GraphHeaderComponent implements OnInit {
  @Input() title: any;
  isDesiable: boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.title == 'News and Events') {
      this.isDesiable = false
    }else {
      // this.isDesiable = true
    }
  }

}
