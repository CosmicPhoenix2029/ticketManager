import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TicketmanagerAppComponent } from './ticketmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TicketService } from './services/ticket.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  //default route for the app
  {path: '', component: TicketmanagerAppComponent, children: [
    //default route for the TicketManagerAppComponents sub components
      {path: 'home', component: MainContentComponent},
      {path: 'ticket/:id', component: TicketComponent}
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
    TicketComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
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
