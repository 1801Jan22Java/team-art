import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../service/application.service';
import { ApproveDenyAdoptionComponent } from '../approve-deny-adoption/approve-deny-adoption.component';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Animal } from '../../models/animal';

// Eric 's!!!!!!!
@Component({
  selector: 'app-manage-adoption-forms',
  templateUrl: './manage-adoption-forms.component.html',
  styleUrls: ['./manage-adoption-forms.component.css']
})
export class ManageAdoptionFormsComponent implements OnInit {

  public applications = [];
  adoptionForms: AdoptionFormsList[];
  columns = [];
  show = true;
  sortBy = '';

  constructor(private applicationService: ApplicationService, /*private adoptionForm: ApproveDenyAdoptionComponent*/) {
  }

  ngOnInit() {
    this.applicationService.getApplications().subscribe(data => this.applications = data);
    this.applicationService.getColumns();
  }

  toggleRow() {
    this.show = !this.show;
  }

  sortRows(type) {
    this.sortBy = type;
  }
  /*
  showForm(form) {
    this.adoptionForm.applicationId = form.applicationId;
    this.adoptionForm.animalName = form.animalName;
    this.adoptionForm.applicantName = form.applicantName;
    this.adoptionForm.address = form.address;
    this.adoptionForm.profession = form.profession;
    this.adoptionForm.phoneNumber = form.phoneNumber;
    this.adoptionForm.housingType = form.housingType;
    this.adoptionForm.status = form.status;
    this.adoptionForm.date = form.date;
    this.adoptionForm.show = true;
  }
  */
}

export interface AdoptionFormsList {
  applicationID: number;
  animal: Animal;
  user: User;
  address: string;
  profession: string;
  phone: number;
  housetype: string;
  date: string;
  appStatus: string;
}

export interface ApplicationList {
  applicationId: number;
  phone: string;
  housetype: string;
}
