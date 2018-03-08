import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
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

 public sDate: string;
  public meetups = [];
  public updateMeetup = {};
  
  constructor(
  	private meetupService: MeetupService, 
  	private activatedRoute: ActivatedRoute,
  	private http: HttpClient, private fb: FormBuilder) { 
  	this.sDate = activatedRoute.snapshot.params['sDate'];
   }

  ngOnInit() {
    this.meetupService.getMeetups().subscribe(data => {
      this.meetupForms = data;
      console.log(data);
      error => console.log("Error: "+error);
    });
    
    this.getVisitorsByDay();
  }

	// Gin
  getVisitorsByDay(){
    this.meetupService.getMeetupsByDay(this.sDate).subscribe(
      data => {this.meetups = data; console.log(this.meetups)}
    
    )}
    // Eric
  sortRows(type) {
    this.sortBy = type;
  }

  approve(form) {
    this.selectedForm = form;
    this.selectedForm.meetupStatus = 'Approved';
    this.onSubmit(form);
  }

  deny(form) {
    this.selectedForm = form;
    this.selectedForm.meetupStatus = 'Denied';
    this.onSubmit(form);
  }

  onSubmit(form) {
    this.selectedForm = form;
    this.meetupService.approveDenyMeetup(form);
    alert('Status is changed to ' +  this.selectedForm.meetupStatus + ". ");
  }
}
