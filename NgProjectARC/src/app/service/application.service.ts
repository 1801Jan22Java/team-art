import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Application } from '../models/application';
import { ApplicationList, AdoptionFormsList } from '../components/manage-adoption-forms/manage-adoption-forms.component';
import "rxjs/Rx";

@Injectable()
export class ApplicationService {

  constructor(private http: HttpClient) { }



 // Evan
 private GETINFO_URL: string = "http://localhost:8080/api/application/applicationListById";
 getInfo(usrID: number): Observable<Application[]> {
   return this.http.post<Application[]>(this.GETINFO_URL, usrID);
 }

  // James

  // Eric

  private _url2: string = 'http://localhost:8080/api/application/applicationList.json';
  getApplications(): Observable<Application[]> {
    console.log(this.http.get(this._url2));
    return this.http.get<Application[]>(this._url2);
  }

  // Gin
  private _url: string = "http://localhost:8080/api/applicationList.json";
  getApplication(): Observable<ApplicationList[]>{
    //console.log(this.http.get(this._url));
    return this.http.get<ApplicationList[]>(this._url);
  }
}
