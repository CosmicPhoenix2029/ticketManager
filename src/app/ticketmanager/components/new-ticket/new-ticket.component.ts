import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, NgForm, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ticket } from '../../models/ticket';
//import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss'],

})

export class NewTicketComponent implements OnInit {

  //constructing a new ticket object (this also helps reset the form when the page is moved away from and then back again)
  newTicket: ticket;
  ngOnInit(): void {
    this.newTicket = {
      id: null,
      subject: null,
      description: null,
      notes: null,
      contact: null,
      assetNumber: null,
      loggedBy: null,
      loggedDate: null,
      category: null,
      classification: null,
      impact: null,
      priority: null,
      status: null,
      team: null,
      leadTech: null
    };
  }

  //form Controls
  newTicketForm = new FormGroup({
    contact: new FormControl('', [Validators.required]),
    contactEmail: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    room: new FormControl('', [Validators.required]),
    base: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    contactPreference: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    notes: new FormControl(''),
    assetNumber: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    impact: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    team: new FormControl('', [Validators.required]),
    member: new FormControl('')
  });

  //getter methods for each formControl (needed for validation):
  get contact() {
    return this.newTicketForm.get('contact');
  }
  get contactEmail() {
    return this.newTicketForm.get('contactEmail');
  }
  get company() {
    return this.newTicketForm.get('company');
  }
  get room() {
    return this.newTicketForm.get('room');
  }
  get base() {
    return this.newTicketForm.get('base');
  }
  get phone() {
    return this.newTicketForm.get('phone');
  }
  get contactPreference() {
    return this.newTicketForm.get('contactPreference');
  }
  get subject() {
    return this.newTicketForm.get('subject');
  }
  get description() {
    return this.newTicketForm.get('description');
  }
  get notes() {
    return this.newTicketForm.get('notes');
  }
  get assetNumber() {
    return this.newTicketForm.get('assetNumber');
  }
  get category() {
    return this.newTicketForm.get('category');
  }
  get impact() {
    return this.newTicketForm.get('impact');
  }
  get priority() {
    return this.newTicketForm.get('priority');
  }
  get team() {
    return this.newTicketForm.get('team');
  }
  get member() {
    return this.newTicketForm.get('member');
  }
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
  onSubmit(): void {
    //this is where I would validate, sanitize and add to DB via API
    //for now I am simply constructing a new object and logging to console
    if (this.newTicketForm.valid) {
      this.newTicket.contact = {
        name: this.newTicketForm.get('contact').value,
        address: this.newTicketForm.get('base').value,
        phoneNumber: this.newTicketForm.get('phone').value,
        contactMethodPreference: this.newTicketForm.get('contactPreference').value
      };
      this.newTicket.subject = this.newTicketForm.get('subject').value,
      this.newTicket.description = this.newTicketForm.get('description').value,
      this.newTicket.notes = this.newTicketForm.get('notes').value,
      this.newTicket.assetNumber = this.newTicketForm.get('assetNumber').value,
      this.newTicket.loggedBy = 'Haydn Atkinson',
      this.newTicket.loggedDate = new Date(),
      this.newTicket.category = this.newTicketForm.get('category').value,
      this.newTicket.classification = 'Incident',
      this.newTicket.impact = this.newTicketForm.get('impact').value,
      this.newTicket.priority = this.newTicketForm.get('priority').value,
      this.newTicket.status = 'Active',
      this.newTicket.team = this.newTicketForm.get('team').value,
      this.newTicket.leadTech = this.newTicketForm.get('member').value

      console.log(this.newTicket);
    }
  };
}