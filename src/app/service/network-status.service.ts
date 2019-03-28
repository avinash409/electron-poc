import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Configuration } from '../app.constants';
import { catchError, tap } from 'rxjs/operators';
import { Error } from '../_models/error';

@Injectable({ providedIn: 'root' })
export class NetworkStatus {
  constructor(private http: HttpClient,
    private config: Configuration) {

  }
checkStatus(): Observable<any> {
  return this.http.get<any>(`${this.config.serverWithApiUrl}/healthcheck?apiKey= + ${this.config.apikey}`)
    .pipe(
      catchError(e => this.handleError<any>(e))
    );
}

  private handleError<T>(error: HttpErrorResponse): Observable<T> {
    let dataError = new Error();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data.';
    console.log(dataError.friendlyMessage);
    return throwError(dataError);
  }
}
