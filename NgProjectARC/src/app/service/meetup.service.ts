import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Meetup } from '../models/meetup';
import "rxjs/Rx";

@Injectable()
export class MeetupService {

  constructor(private http: HttpClient) { }

   //Evan
  
  
  // James
  
  
  // Eric
  private ROOT_URL: string = 'http://localhost:8080/api/meetup';

  getMeetups(): Observable<Meetup[]> {
    return this.http.get<Meetup[]>(this.ROOT_URL + '/meetupList.json');
  }

  // method for employees to approve or deny a visitor form
  // the mapping for the approveDeny method in the controller is appended to the root url created above.
  //and the second argument is the data object provided by a method calling this service method
  // from approve-deny-visitor.ts
  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  approveDenyMeetup(buttonDecision) {
    this.http.post(this.ROOT_URL + '/approveDeny.json', JSON.stringify(buttonDecision), {headers: this.headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
       console.log(err);
      }
    );
  }
  
  // Gin
  
  
}
