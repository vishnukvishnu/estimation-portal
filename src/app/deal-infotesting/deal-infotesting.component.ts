import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deal-infotesting',
  templateUrl: './deal-infotesting.component.html',
  styleUrls: ['./deal-infotesting.component.scss']
})
export class DealInfotestingComponent implements OnInit {
    panelOpenState = true;
    step = 0;
    // viewMode = true;
  constructor(private router: Router) {}

  ngOnInit() {
  }
  redirect() {
    this.router.navigate(['./estmationflow']);
  }
    // collapseAll(){
    //  this.viewMode = !this.viewMode;
    // }
}
