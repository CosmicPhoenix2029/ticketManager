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
    this.route.params.subscribe({
      next: params => {
        let id = params['id'];
        if(!id) id = 1;
        //this.user = null;
        this.service.tickets.subscribe(tickets => {
          if(tickets.length === 0) {
            return;  
          }
          this.ticket = this.service.getTicketById(id);
          console.log(this.ticket);
        })
      }
    });
  }
}