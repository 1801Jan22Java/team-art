import { Component, OnInit } from '@angular/core';
import { AdoptionFormsService } from '../../service/adoption-forms.service';

@Component({
  selector: 'app-list-of-adoption-forms',
  templateUrl: './list-of-adoption-forms.component.html',
  styleUrls: ['./list-of-adoption-forms.component.css']
})
export class ListOfAdoptionFormsComponent implements OnInit {

  public adoptionForms = [];

  constructor(private adoptionFormsService: AdoptionFormsService) { }

  ngOnInit() {
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
}
