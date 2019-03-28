import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Configuration } from '../app.constants';
import { catchError } from 'rxjs/operators';
import { Error } from '../_models/error';

@Injectable({ providedIn: 'root' })
export class ApiRepository {
  constructor(private http: HttpClient,
    private config: Configuration) {

  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.config.serverWithApiUrl}/${url}`)
      .pipe(
        catchError(e => this.handleError<T>(e))
      );
  }

  public post<T, U>(url: string, body: U): Observable<T> {
    return this.http.post<T>(`${this.config.serverWithApiUrl}/${url}`, body)
      .pipe(
        catchError(e => this.handleError<T>(e))
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
