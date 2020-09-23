import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ev-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.scss'],
  host: {'(document:click)': 'onClick()'}
})
export class DashboardSearchComponent implements OnInit {
  @Input() isShow: boolean;
  @Input() isOpen: boolean;
  @Output() myOutput:EventEmitter<boolean> = new EventEmitter();
  isSearch: boolean= true;
  toggledownSearch(e){
    this.myOutput.emit(this.isSearch);
    e.stopPropagation();
    this.isSearch = !this.isSearch;
    this.isShow = true;
    this.isOpen = true;
  }
  onClick() {
    this.isShow = true;
    this.isOpen = true;
    this.isSearch = true;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
