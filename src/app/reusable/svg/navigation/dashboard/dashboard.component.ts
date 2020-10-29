import { Component, OnInit, Input, ViewChild, 
  Renderer2,
  ElementRef  
} from '@angular/core';

@Component({
  selector: 'ev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Input() hoverClas:any;
@Input() name:any;

  ngOnInit(): void {
  }
}
