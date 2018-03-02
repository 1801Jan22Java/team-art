import { Component, OnInit } from '@angular/core';
import { AdoptionFormsService } from '../../service/adoption-forms.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manage-adoption-forms',
  templateUrl: './manage-adoption-forms.component.html',
  styleUrls: ['./manage-adoption-forms.component.css']
})
export class ManageAdoptionFormsComponent implements OnInit {

  adoptionForms: AdoptionFormsList[];
  columns = [];
  show = true;
  sort = '';

  constructor(private adoptionFormsService: AdoptionFormsService) { }

  ngOnInit() {
    this.adoptionFormsService.getAdoptionForms().subscribe(data => this.adoptionForms = data);
    this.adoptionFormsService.getColumns();

  }

  toggleRow() {
    this.show = !this.show;
  }

  sortRows(type) {
    this.sort = type;
  }
  showForm(form) {
    
  }
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
