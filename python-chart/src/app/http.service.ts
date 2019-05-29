import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
  } from '@angular/common/http';
  import { Observable, throwError, Subject } from 'rxjs';
  import { map, catchError, take, timeout } from 'rxjs/operators';

  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }
  configUrl = "http://localhost:3000/";
  //To read a tender based on status
public getTestData() {
  return this.http
  .get(this.configUrl + 'test' , httpOptions)
  .pipe(catchError(this.handleError));
  }
  public getTrainData() {
    return this.http
    .get(this.configUrl + 'train' , httpOptions)
    .pipe(catchError(this.handleError));
    }

    public getForecastData() {
      return this.http
      .get(this.configUrl + 'forecast' , httpOptions)
      .pipe(catchError(this.handleError));
      }
  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = error.error.message;
    // return Observable.throw(error.json().error || 'backend server error');
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = error.error.message;
    // console.error(
    // `Backend returned code ${error.status}, ` + `body was: ${error.error}`
    // );
    }
    // return an observable with a user-facing error message
    return throwError(errorMessage);
    //return Observable.throw(error);
    }
}
