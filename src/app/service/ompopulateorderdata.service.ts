import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Configuration } from '../app.constants';
import { ApiRepository } from './api-repository.service';

import { Observable, throwError } from 'rxjs';
import { Orders } from '../_models';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmPopulateOrderDataService {

  constructor(private repository: ApiRepository, private config: Configuration, private http: HttpClient) { }


  getOmOrderDataByEmployeeId(employeeId: number): Observable<Orders[]> {
    return this.repository.get<Orders[]>(`ompopulateorderdata/get?apiKey=` + this.config.apikey + '&employeeId=' + employeeId);
  }
}
