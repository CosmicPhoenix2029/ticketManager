import { Injectable } from '@angular/core';
import { ticket } from '../models/ticket';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})

export class TicketService {

  private ticketUrl = 'green-rock-06bd0b003.3.azurestaticapps.net:4200/api/tickets/tickets.json';
  private _tickets:  BehaviorSubject<ticket[]>;
  private dataStore: {
    tickets: ticket[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { tickets: [] };
    this._tickets = new BehaviorSubject<ticket[]>([]);
    this.loadAll();
  }

  //make the tickets accessible to other components (as an observable data stream)
  get tickets(): Observable<ticket[]> {
    return this._tickets.asObservable();
  }

  loadAll() {
    return this.http.get<ticket[]>(this.ticketUrl).subscribe({
      next: data => {
        this.dataStore.tickets = data;
        this._tickets.next(Object.assign({}, this.dataStore).tickets);
      },
      error: err => {
        console.log('failed to fetch tickets!');
      }
    });
  }

  getTicketById(id: number): ticket | undefined{
    return this.dataStore.tickets.find(ticket => ticket.id == id);
  }

}
