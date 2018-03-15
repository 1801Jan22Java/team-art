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

  // James


  // Eric
  private ROOT_URL: string = 'http://localhost:8080/api/user';
  updateInfo(userData) {
    this.http.post(this.ROOT_URL + '/updateInfo.json', JSON.stringify(userData), {headers: this.headers}).subscribe();
  }

  // Gin
  // log in
  private API_URL: string = "http://localhost:8080/api/user";
  public userID: number = 0;
  isLogin: boolean = false;
  
  headers = new Headers({
    'Content-type': 'application/json'
  });
  sendUserInfo(url, data) {
    // alert("Entered Email ID is " + data.email);
    return this.http.post(url, JSON.stringify(data), {headers: this.headers})
  }
 
 
 public getLocalInfo(id: string): string {
    return localStorage.getItem(id);
}
//  private messageSource = new BehaviorSubject<number>(this.userID);
//  currentMessage = this.messageSource.asObservable();

  
}
