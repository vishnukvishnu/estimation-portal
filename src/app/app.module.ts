import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// meterial imports
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AccordianTableService} from './Services/accordian-table.service';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {DealInformationComponent} from './deal-information/deal-information.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DealInformationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AccordianTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
