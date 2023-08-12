import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazy load the module if /ticketmanager is navigated to
  { path: 'ticketmanager', loadChildren: () => import('./ticketmanager/ticketmanager.module').then(m => m.TicketmanagerModule ) },
  //catch all route to redirect to the above route
  { path: '**', redirectTo: 'ticketmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
