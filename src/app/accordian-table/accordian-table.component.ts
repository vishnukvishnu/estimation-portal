import { Component, OnInit } from '@angular/core';
import {AccordianTableService} from '../Services/accordian-table.service';

@Component({
  selector: 'app-accordian-table',
  templateUrl: './accordian-table.component.html',
  styleUrls: ['./accordian-table.component.scss']
})
export class AccordianTableComponent implements OnInit {
    step = 0;
  accordianDetails: any[];
  constructor(private accordianTableService: AccordianTableService) { }

  ngOnInit() {
  this.accordianTableService.getAccordiandetails().subscribe(data => {
   this.accordianDetails = data as any[];
  });
  }

}
