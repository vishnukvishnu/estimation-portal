import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-estimation-flow',
  templateUrl: './estimation-flow.component.html',
  styleUrls: ['./estimation-flow.component.scss']
})
export class EstimationFlowComponent implements OnInit {
   viewMode = 'information';
  constructor(private router: Router, private route: ActivatedRoute) {
      this.router.navigate(['dealinformation'], {relativeTo: this.route});
  }

  ngOnInit() {

  }
    dealinformation() {
      this.router.navigate(['dealinformation'], {relativeTo: this.route});
    }
    dealparameters() {
        this.router.navigate(['dealparameters'], {relativeTo: this.route});
        // if (this.router.url === '/estmationflow/dealparameters') {
        //     this.istru = false;
        //      console.log("in");
        // }
    }
    testingrequirments() {
        this.router.navigate(['testingrequirments'], {relativeTo: this.route});
    }
    generaliformations() {
        this.router.navigate(['generaliformations'], {relativeTo: this.route});
    }
}
