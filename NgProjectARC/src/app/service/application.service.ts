import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationList } from '../components/manage-adoption-forms/manage-adoption-forms.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApplicationService {

  private _url: string = "http://localhost:8084/emp/AplcList.json";
  constructor(private http: HttpClient) { }

  getApplication(): Observable<ApplicationList[]>{
    //console.log(this.http.get(this._url));
    return this.http.get<ApplicationList[]>(this._url);
  }

}
