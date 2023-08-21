import { Component, ViewChild, OnInit, Input} from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { ticket } from '../../models/ticket';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection} from '@angular/material/sort';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})

export class MainContentComponent implements OnInit{

  filteredTickets: ticket[] = [];
  tickets: ticket[] = [];
  errorMessage: string = "";
  sub!: Subscription;
  dataSource!: MatTableDataSource<ticket>;
  displayedColumns: string[] = ['Ticket', 'Logged', 'Subject', 'Contact', 'AssetNumber', 'Base', 'leadTech'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.tickets.subscribe({
      next: tickets => {
        this.tickets = tickets;
        this.filteredTickets = this.tickets;
        this.dataSource = new MatTableDataSource<ticket>(this.filteredTickets); 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: err => this.errorMessage = err
    });
  }

  async list() {
    const endpoint = '/data-api/rest/tickets';
    const response = await fetch(endpoint);
    const data = await response.json();
    console.table(data.value);
  }
}
