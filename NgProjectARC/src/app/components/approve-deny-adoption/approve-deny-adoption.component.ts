import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Erics'!!!!!!!
@Component({
  selector: 'app-approve-deny-adoption',
  templateUrl: './approve-deny-adoption.component.html',
  styleUrls: ['./approve-deny-adoption.component.css']
})
export class ApproveDenyAdoptionComponent implements OnInit {
  private _url = 'http://localhost:8080/api/application/updateApplication.json';
  applicationId: string;
  animalName: string;
  applicantName: string;
  address: string;
  profession: string;
  phoneNumber: number;
  housingType: string;
  status: string;
  date: string;
  show = false;

  constructor(private http: HttpClient) { }

  hide() {
    this.show = false;
  }

  approve() {
    this.status = 'Approved';
  }

  deny() {
    this.status = 'Denied';
  }

  onSubmit(data) {
   this.http.post(this._url, {
     applicationId: this.applicationId,
     action: this.status,
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
