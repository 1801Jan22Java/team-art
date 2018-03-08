import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";
 
//Gin'!!!!!!! 
import {UserService} from '../../service/user.service';
import {ApplicationService} from '../../service/application.service';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {


  public applications = [];
  public user = {};
  private API_URL: string = "http://localhost:8080/api/user";
  
  constructor(
    private userService: UserService,
    private applicationService: ApplicationService,
    private navbarComponent: NavbarComponent,
    private router: Router) {}

  ngOnInit() {
  }

  getApplications() {
    this.applicationService.getApplication().subscribe(data => this.applications = data);
  }
  
  login(data) {
    this.navbarComponent.login(data);
  }

}

export interface ApplicationList {
  applicationId: number,
  phone: string,
  housetype: string
}

  //    event.preventDefault(); 
 