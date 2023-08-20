import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule}  from '@angular/material/form-field';
import { TicketmanagerAppComponent } from './ticketmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { TicketService } from './services/ticket.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  //default route for the app
  {path: '', component: TicketmanagerAppComponent, children: [
    //default route for the TicketManagerAppComponents sub components
      {path: 'home', component: MainContentComponent},
      {path: 'ticket/:id', component: TicketComponent},
      {path: 'log', component: NewTicketComponent},
    ]
  },
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  declarations: [
    TicketmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    TicketComponent,
    NewTicketComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TicketService,
    HttpClient,
  ]
})
export class TicketmanagerModule { }
