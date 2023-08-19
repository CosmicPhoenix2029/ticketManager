import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {NgIf} from '@angular/common';
//import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],
  
})

export class NewTicketComponent {

  contact = new FormControl('');
  contactEmail = new FormControl('');
  company = new FormControl('');
  room = new FormControl('');
  base = new FormControl('');
  phone = new FormControl('');
  contactPreference = new FormControl('');
  subject = new FormControl('');
  description = new FormControl('');
  notes = new FormControl('');
  onSite = new FormControl('');
  assetNumber = new FormControl('');
  category = new FormControl('');
  impact = new FormControl('');
  priority = new FormControl('');
  team = new FormControl('');
  member = new FormControl('');

  companies: string[] = [
    'SSHIS',
    'MPFT',
    'NSCHT',
    'ICB',
    'GP'
  ];

  contactPreferences: string[] = [
    'Phone',
    'Email',
    'MS Teams'
  ];

  impacts: string[] = [
    'very high',
    'high',
    'medium',
    'low',
    'very low'
  ];

  priorities: string[] = [
    'very high',
    'high',
    'medium',
    'low',
    'very low'
  ];

  categories: string[] = [
    'Advice and Guidance',
    'User account administration',
    'software installation',
    'hardware fault',
    'software fault',
    'network fault',
    'IPT fault'
  ];

  teams: string[] = [
    'Service Desk',
    'Remote Support',
    'Second Line',
    'Endpoint Administration',
    'Network and Systems',
    'Security Operations Centre',
    'Application Development'
  ];

  teamMembers: string[] = [
    'Haydn Atkinson',
    'Bernard Bean',
    'John Doe',
    'Margret McMcington'
  ];
}
