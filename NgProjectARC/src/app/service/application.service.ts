import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Application } from '../models/application';
import { ApplicationList, AdoptionFormsList } from '../components/manage-adoption-forms/manage-adoption-forms.component';
import "rxjs/Rx";

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }



 // Evan


  // James

  // Eric
  private ROOT_URL: string = 'http://localhost:8080/api/application';

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.ROOT_URL + '/applicationList.json');
  }

  // method for employees to approve or deny an application
  // the mapping for the approveDeny method in the controller is appended to the root url created above.
  //and the second argument is the data object provided by a method calling this service method
  // from approve-deny-adoption.ts
  headers = new HttpHeaders({
    'Content-type': 'application/json'
  });
  approveDenyApplication(buttonDecision) {
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
  private _url: string = "http://localhost:8080/api/applicationList.json";
  getApplication(): Observable<ApplicationList[]>{
    //console.log(this.http.get(this._url));
    return this.http.get<ApplicationList[]>(this._url);
  }
}
