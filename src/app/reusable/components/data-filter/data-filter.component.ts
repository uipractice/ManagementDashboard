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
  constructor() {}

  ngOnInit(): void {}
}
