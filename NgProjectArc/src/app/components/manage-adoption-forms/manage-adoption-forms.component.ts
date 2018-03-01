import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-manage-adoption-forms',
  templateUrl: './manage-adoption-forms.component.html',
  styleUrls: ['./manage-adoption-forms.component.css']
})
export class ManageAdoptionFormsComponent implements OnInit {

  public applications = [];
  constructor(private applicationService : ApplicationService) { }

  ngOnInit() {
    this.applicationService.getApplication().subscribe(data => this.applications = data);
  }

}

export interface ApplicationList {
  applicationId : number,
  phone : string,
  housetype : string
}