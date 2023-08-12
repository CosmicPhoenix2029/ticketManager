import { Injectable } from '@angular/core';
import { ticket } from '../models/ticket';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class TicketService {

  private ticketUrl = 'http://localhost:4200/api/tickets/tickets.json';

  constructor(private http: HttpClient) { }

  getTickets(): Observable<ticket[]> {
    return this.http.get<ticket[]>(this.ticketUrl).pipe(
      tap(data => console.log("all", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    //in a real world app, this function would be used to send the error to some remote logging infrastructure
    //I am logging to the console instead for simplicity
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      //client-side or network error occured
      errorMessage = `an error occured: ${err.error.message}`;
    }
    else {
      //the backend returned an unsuccessful repsonse code
      errorMessage = `Server returned code: ${err.status}, the error message is: ${err.message}`
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
