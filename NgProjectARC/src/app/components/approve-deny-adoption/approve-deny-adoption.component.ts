import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Components
import { ManageAdoptionFormsComponent } from '../manage-adoption-forms/manage-adoption-forms.component';

// Models
import { Application } from '../../models/application';
import { User } from '../../models/user';
import { Animal } from '../../models/animal';

// Services
import { ApplicationService } from '../../service/application.service';


// Erics'!!!!!!!
@Component({
  selector: 'app-approve-deny-adoption',
  templateUrl: './approve-deny-adoption.component.html',
  styleUrls: ['./approve-deny-adoption.component.css']
})
export class ApproveDenyAdoptionComponent implements OnInit {
  currApplication: Application;
  show = false;
  constructor(private http: HttpClient, private application: ManageAdoptionFormsComponent,
    private applicationService: ApplicationService, private fb: FormBuilder) { 
    this.currApplication = application.selectedApp;
    if(application.manageForm)
      this.show = true;
  }

  hide() {
    this.show = false;
    this.application.manageForm = false;
  }

  approve() {
    this.currApplication.appStatus = 'Approved';
  }

  deny() {
    this.currApplication.appStatus = 'Denied';
  }

  onSubmit() {
    this.applicationService.approveDenyApplication(this.currApplication);
    /*
    this.http.post(this._url, {
     applicationId: this.currApplication.applicationID,
     action: this.currApplication.appStatus,
   })
     .subscribe(
       res => {
         console.log(res);
       },
       err => {
        console.log("Error occurred");
         console.log(err);
       }
     );
     */
     this.hide();
 }

  ngOnInit() {}
}
