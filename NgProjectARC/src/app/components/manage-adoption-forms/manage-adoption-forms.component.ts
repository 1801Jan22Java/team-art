import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../service/application.service';
import { ApproveDenyAdoptionComponent } from '../approve-deny-adoption/approve-deny-adoption.component'
import { Observable } from 'rxjs/Observable';
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
  sort = '';
  constructor(private applicationService: ApplicationService, ) { 
  /*private adoptionFormsService: AdoptionFormsService,
    private adoptionForm: ApproveDenyAdoptionComponent*/
  }

  ngOnInit() {
    this.applicationService.getApplication().subscribe(data => this.applications = data);
   /* this.adoptionFormsService.getAdoptionForms().subscribe(data => this.adoptionForms = data);
    this.adoptionFormsService.getColumns();*/
  }

  toggleRow() {
    this.show = !this.show;
  }

  sortRows(type) {
    this.sort = type;
  }
//  showForm(form) {
//    this.adoptionForm.applicationId = form.applicationId;
//    this.adoptionForm.animalName = form.animalName;
//    this.adoptionForm.applicantName = form.applicantName;
//    this.adoptionForm.address = form.address;
//    this.adoptionForm.profession = form.profession;
//    this.adoptionForm.phoneNumber = form.phoneNumber;
//    this.adoptionForm.housingType = form.housingType;
//    this.adoptionForm.status = form.status;
//    this.adoptionForm.date = form.date;
//    this.adoptionForm.show = true;
//  }
}

export interface AdoptionFormsList {
  applicationId: number;
  animalName: string;
  applicantName: string;
  address: string;
  profession: string;
  phoneNumber: number;
  housingType: string;
  date: string;
  status: string;
}

export interface ApplicationList {
  applicationId : number,
  phone : string,
  housetype : string
}