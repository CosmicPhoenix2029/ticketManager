import { Injectable } from '@angular/core';
import { ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: "root"
})

export class TicketService {

  constructor() { }

  getTickets(): ticket[] {
    return [];
  }
}
