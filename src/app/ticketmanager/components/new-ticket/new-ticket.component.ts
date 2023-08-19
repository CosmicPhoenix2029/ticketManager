import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {NgIf} from '@angular/common';
//import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],
  
})

export class NewTicketComponent {

  //form Controls
  contact = new FormControl('', [Validators.required]);
  contactEmail = new FormControl('', [Validators.required]);
  company = new FormControl('', [Validators.required]);
  room = new FormControl('', [Validators.required]);
  base = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  contactPreference = new FormControl('', [Validators.required]);
  subject = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  notes = new FormControl('');
  assetNumber = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);
  impact = new FormControl('', [Validators.required]);
  priority = new FormControl('', [Validators.required]);
  team = new FormControl('', [Validators.required]);
  member = new FormControl('', [Validators.required]);

  //select options
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

  //hangle form submission
  onSubmit(form: NgForm){
  //this is where I would validate, sanitize and add to DB via API
    
  }

}
