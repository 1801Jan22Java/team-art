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
  headers = new Headers({
    'Content-type': 'application/json'
  });
  sendUserInfo(url, data) {
    // alert("Entered Email ID is " + data.email);
    return this.http.post(url, JSON.stringify(data), {headers: this.headers})
  }

  //share data in components
  private messageSource = new BehaviorSubject<string>("default msg");
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

}
