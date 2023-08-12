import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { ticket } from '../../models/ticket';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  filteredTickets: ticket[] = [];
  tickets: ticket[] = [];
  errorMessage: string = "";

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: tickets => {
        this.tickets = tickets;
        this.filteredTickets = this.filteredTickets;
      },
      error: err => this.errorMessage = err
    });
  }
}
