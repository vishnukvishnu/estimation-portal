import { Component } from '@angular/core';
import { EstimationFlowComponent } from './estimation-flow/estimation-flow.component';
import { DealInformationComponent } from './deal-information/deal-information.component';
import { DealParametersComponent } from './deal-parameters/deal-parameters.component';
import { AccordianTableComponent } from './accordian-table/accordian-table.component';
import { DealInfotestingComponent } from './deal-infotesting/deal-infotesting.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  export class AppComponent {
  title = 'Estimation-portal';

  constructor(public router: Router) {
  }

  // navigation() {
  //   if (this.router.url === '/estmationflow') {
  //     return true;
  //   }
  // }


}
