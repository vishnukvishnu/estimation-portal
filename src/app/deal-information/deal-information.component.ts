import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-deal-information',
  templateUrl: './deal-information.component.html',
  styleUrls: ['./deal-information.component.scss']
})
export class DealInformationComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }
    onSelect() {
        this.router.navigate(['/dealparameters',  ]);
    }
}