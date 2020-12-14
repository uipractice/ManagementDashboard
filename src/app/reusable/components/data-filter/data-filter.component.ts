import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ev-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
})
export class DataFilterComponent implements OnInit {
  @Input() title: any;
  @Input() selectOptions: any;
  @Input() settings: any;
  @Input() dataPoints: any;
  isDesiable: boolean;
  constructor() {}

  ngOnInit(): void {
    
    if(this.title == 'News and Events') {
      this.isDesiable = false
    }else {this.isDesiable = true}
  }
}
