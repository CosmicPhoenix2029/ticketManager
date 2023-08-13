import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { ticket } from '../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticket!: ticket | undefined;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private service: TicketService) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getTicket(id);
    }
  }

  getTicket(id: number): void {
    this.service.getTicketById(id).subscribe({
      next: ticket => this.ticket = ticket,
      error: err => this.errorMessage = err
    });
  }
}

