import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {DealInformationComponent} from './deal-information/deal-information.component';
import {DealParametersComponent} from './deal-parameters/deal-parameters.component';
import {AccordianTableComponent} from './accordian-table/accordian-table.component';
import {TestingRequirmentsComponent} from './testing-requirments/testing-requirments.component';
import {EstimationFlowComponent} from './estimation-flow/estimation-flow.component';
import {DealInfotestingComponent} from './deal-infotesting/deal-infotesting.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
   {path: '', redirectTo: '/infotesting', pathMatch: 'full' },
   {path: 'infotesting', component: DealInfotestingComponent},
   {
       path: 'estmationflow',
       component: EstimationFlowComponent,
       children: [
           {path: 'dealinformation', component: DealInformationComponent},
           {path: 'dealparameters', component: DealParametersComponent},
           {path: 'testingrequirments', component: TestingRequirmentsComponent},
           {path: 'generaliformations', component: AccordianTableComponent},
            ]
   },
   {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DealInfotestingComponent,
                                  EstimationFlowComponent,
                                  DealParametersComponent,
                                  TestingRequirmentsComponent,
                                  AccordianTableComponent,
                                  PageNotFoundComponent
];
