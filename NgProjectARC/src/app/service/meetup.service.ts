import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Meetup } from '../models/meetup';
import "rxjs/Rx";

@Injectable()
export class MeetupService {

  constructor(private httpClient: HttpClient) { }

  //Evan
  private GETINFO_URL: string = "http://localhost:8080/api/meetup/meetupListById";
  getInfo(usrID: number): Observable<Meetup[]> {
    return this.httpClient.post<Meetup[]>(this.GETINFO_URL, usrID);
  }

  // James


  // Eric
  private ROOT_URL: string = 'http://localhost:8080/api/meetup';

  getMeetups(): Observable<Meetup[]> {
    return this.httpClient.get<Meetup[]>(this.ROOT_URL + '/meetupList.json');
  }

  // method for employees to approve or deny a visitor form
  // the mapping for the approveDeny method in the controller is appended to the root url created above.
  //and the second argument is the data object provided by a method calling this service method
  // from approve-deny-visitor.ts
  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  approveDenyMeetup(buttonDecision) {
    this.httpClient.post(this.ROOT_URL + '/approveDeny.json', JSON.stringify(buttonDecision), {headers: this.headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
       console.log(err);
      }
    );
  }
  // Gin
  // get multiple visitor list by Day
  private meetupsByDay : string = "http://localhost:8080/api/meetup/visitorsByDay.json";
  getMeetupsByDay(sDate): Observable<MeetUp[]>{
    return this.httpClient.get<MeetUp[]>(this.meetupsByDay+"?sDate="+sDate);
  }
  // get multiple visitor list 
  private meetups : string = "http://localhost:8080/api/meetup/calendar.json";
  getMeetupList(sDate): Observable<MeetUpByDay[]>{
    return this.httpClient.get<MeetUpByDay[]>(this.meetups+"?sDate="+sDate );
  }
  
  // send Meet up Form
  sendMeetupForm(url, data){
    return this.httpClient.post(url,  JSON.stringify(data), {headers: this.headers})
  }
  
}

export interface MeetUp {
  meetupID:number;
  meetupDate: string;
  meetupStatus: string;
  animal: Animal;
  user: User;
}
export interface Animal {
  animalID: number;
  name: string;
  maturity: string;
  gender: string;
  adoptStatus: string;
  species: string;
}
export interface User {
  userID: number;
  usertype: number;
  email: string;
  password : string;
  name: string;
}
export interface MeetUpByDay {
  totalVisitor: string;
  day: string;
}
