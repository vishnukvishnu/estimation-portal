import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccordianTableService {

  constructor(private http: HttpClient) { }
  public getAccordiandetails(): Observable<any> {
    return this.http.get('/assets/Json/accordianDetails.json');
  }
}

