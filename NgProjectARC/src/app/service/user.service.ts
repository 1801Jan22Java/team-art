import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  
   //Evan
  
  
  // James
  
  
  // Eric
  
  
  // Gin
  private API_URL: string = "http://localhost:8080/api/user";
  headers = new Headers({
    'Content-type': 'application/json'
  });
  sendUserInfo(url, data) {
    // alert("Entered Email ID is " + data.email);
    this.http.post(
      url,  JSON.stringify(data),  {headers: this.headers}).subscribe()
  }
  
  
  
  

}
