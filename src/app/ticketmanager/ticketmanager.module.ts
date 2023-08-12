import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketmanagerAppComponent } from './ticketmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';



@NgModule({
  declarations: [
    TicketmanagerAppComponent,
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketmanagerModule { }
