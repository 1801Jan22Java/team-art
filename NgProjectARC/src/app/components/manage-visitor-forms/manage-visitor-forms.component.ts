import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// Components
import { CalendarComponent } from '../calendar/calendar.component';

// Models
import { Meetup } from '../../models/meetup';
import { User } from '../../models/user';
import { Animal } from '../../models/animal';

// Services
import { MeetupService } from '../../service/meetup.service';

@Component({
  selector: 'app-manage-visitor-forms',
  templateUrl: './manage-visitor-forms.component.html',
  styleUrls: ['./manage-visitor-forms.component.css']
})
export class ManageVisitorFormsComponent implements OnInit {

  meetupForms: Meetup[]; 
  selectedForm: Meetup;
  sortBy = '';

  constructor(/*private calendar: CalendarComponent,*/ private meetupService: MeetupService, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.meetupService.getMeetups().subscribe(data => {
      this.meetupForms = data;
      console.log(data);
      error => console.log("Error: "+error);
    });
  }

  sortRows(type) {
    this.sortBy = type;
  }

  approve(form) {
    this.selectedForm = form;
    this.selectedForm.meetupStatus = 'Approved';
  }

  deny(form) {
    this.selectedForm = form;
    this.selectedForm.meetupStatus = 'Denied';
  }

  onSubmit(form) {
    this.selectedForm = form;
    this.meetupService.approveDenyMeetup(form);
  }
}
