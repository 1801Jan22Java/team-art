import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ManageAdoptionFormsComponent } from '../manage-adoption-forms/manage-adoption-forms.component';
import { Application } from '../../models/application';

// Erics'!!!!!!!
@Component({
  selector: 'app-approve-deny-adoption',
  templateUrl: './approve-deny-adoption.component.html',
  styleUrls: ['./approve-deny-adoption.component.css']
})
export class ApproveDenyAdoptionComponent implements OnInit {
  private _url = 'http://localhost:8080/api/application/updateApplication.json';
  currApplication: Application;
  show = false;

  constructor(private http: HttpClient, private application: ManageAdoptionFormsComponent) { 
    this.currApplication = application.currentApp;
  }

  hide() {
    this.show = false;
  }

  approve() {
    this.currApplication.appStatus = 'Approved';
  }

  deny() {
    this.currApplication.appStatus = 'Denied';
  }

  onSubmit(data) {
   this.http.post(this._url, {
     applicationId: this.currApplication.applicationID,
     action: this.currApplication.appStatus,
   })
     .subscribe(
       res => {
         console.log(res);
       },
       err => {
         console.log('Error occured');
       }
     );
 }

  ngOnInit() {}
}
