import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deal-parameters',
  templateUrl: './deal-parameters.component.html',
  styleUrls: ['./deal-parameters.component.scss']
})
export class DealParametersComponent implements OnInit {
   sub: any;
  constructor(public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

}

}
