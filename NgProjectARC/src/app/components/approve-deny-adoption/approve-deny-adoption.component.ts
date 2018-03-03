import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//Erics'!!!!!!! 
@Component({
  selector: 'app-approve-deny-adoption',
  templateUrl: './approve-deny-adoption.component.html',
  styleUrls: ['./approve-deny-adoption.component.css']
})
export class ApproveDenyAdoptionComponent implements OnInit {
  private _url = 'http://localhost:8084/api/AplcList.json';
  applicationId: number;
  animalName: string;
  applicantName: string;
  address: string;
  profession: string;
  phoneNumber: number;
  housingType: string;
  status: string;
  date: string;
  show = false;
  action = '';

  constructor(private http: HttpClient) { }

  hide() {
    this.show = false;
  }

  approve() {
    this.action = 'Approved';
  }

  deny() {
    this.action = 'Denied';
  }

  onSubmit(data) {
   this.http.post(this._url, {
     applicationId: this.applicationId,
     action: this.action,
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

 
