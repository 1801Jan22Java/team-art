import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs';
import { User } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: Http, private httpClient: HttpClient) {}


  //Evan
  private GETINFO_URL: string = "http://localhost:8080/api/user/getInfo";
  getInfo(usrID: number): Observable<User> {
    return this.httpClient.post<User>(this.GETINFO_URL, usrID);
  }

  private UPDATEINFO_URL: string = "http://localhost:8080/api/user/updateUserInfo";
  updateUserInfo(data) {
    this.httpClient.post(this.UPDATEINFO_URL, data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  // James


  // Eric


  // Gin
  // log in
  private API_URL: string = "http://localhost:8080/api/user";
  public userID: number = 0;
  headers = new Headers({
    'Content-type': 'application/json'
  });
  sendUserInfo(url, data) {
    // alert("Entered Email ID is " + data.email);
    return this.http.post(url, JSON.stringify(data), {headers: this.headers})
  }

  //share data in components
  shareUserInfo(data) {
    console.log('user service got user info!' + data);
    this.userID = JSON.parse(data).userID;  
    this.changeMessage(this.userID);
  }
  private messageSource = new BehaviorSubject<number>(this.userID);
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: number) {
    this.messageSource.next(message);
  }

}
