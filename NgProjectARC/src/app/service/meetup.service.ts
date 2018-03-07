import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Meetup } from '../models/meetup';

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


  // Gin


}
