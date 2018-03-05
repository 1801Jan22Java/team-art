import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: Http) {}


  //Evan


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
