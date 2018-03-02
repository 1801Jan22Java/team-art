import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdoptionFormsList } from '../components/manage-adoption-forms/manage-adoption-forms.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdoptionFormsService {
  private _url = 'http://localhost:8084/emp/AplcList.json';
  constructor(private http: HttpClient) { }

  getAdoptionForms(): Observable<AdoptionFormsList[]> {
    // console.log(this.http.get(this._url));
    return this.http.get<AdoptionFormsList[]>(this._url);
  }

  // the names have to match the field names of your
  // domain objects in Java
  getColumns(): string[] {
    return ['user.name', 'animal.name', 'appStatus', 'appDate'];
  }
}
