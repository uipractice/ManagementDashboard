import { Component, OnInit, Input, ViewChild, 
  Renderer2,
  ElementRef  
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Input() hoverClas:any;
@Input() name:any;
currentUrl = "";

constructor(private router: Router){
  this.currentUrl = this.router.url.slice(1,this.router.url.length);
}

  ngOnInit(): void {
  }
}
