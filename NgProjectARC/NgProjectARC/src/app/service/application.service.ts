import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApplicationList, AdoptionFormsList } from '../components/manage-adoption-forms/manage-adoption-forms.component';

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }



 // Evan


  // James

  // Eric

  private _url2: string = 'http://localhost:8080/api/application/applicationList.json';
  getApplications(): Observable<AdoptionFormsList[]> {
    console.log("hello");
    console.log(this.http.get(this._url2));
    return this.http.get<AdoptionFormsList[]>(this._url2);
  }

  // Gin
  private _url: string = "http://localhost:8080/api/applicationList.json";
  getApplication(): Observable<ApplicationList[]>{
    //console.log(this.http.get(this._url));
    return this.http.get<ApplicationList[]>(this._url);
  }
}
