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
    
//    this.userService.sendUserInfo(this.API_URL + "/login", data)
//      .subscribe(data => {
//        
//        let name: string = JSON.parse(data.text()).name;
//        
//        // (1) if doesn't have return value, login fail.
//        if (name == null) {
//          alert('The email does not exist or wrong password. please try again.');
//        window.location.reload();
//        
//        } else {
//        // (2) if it has return value, login success.
//          alert('welcome! ' + JSON.parse(data.text()).name);        
//          // (2-1) save userID in session
//          localStorage.setItem( 'userID', JSON.parse(data.text()).userID);  
//          // (2-2) send usre
//          //this.navbarComponent.checkLogin(JSON.parse(data.text()).userID);
//          this.router.navigate(['/homepage']);
//        }
//      });
  }

}

export interface ApplicationList {
  applicationId: number,
  phone: string,
  housetype: string
}




  // logIn(formValue: NgForm){
  //    event.preventDefault(); 

  //   var headers = new Headers();

  //   headers.append("Content-Type", "application/json");
  //   this.http.post (
  //     this.API_URL+"/login",        // url
  //     JSON.stringify(formValue),    // data  values
  //     {headers : headers}
  //   ).subscribe(r => {this.API_RESULT; })
  // }   

// const target = event.target;
// this.user.usertype = target.querySelector('#email').value;
// this.user.password = target.querySelector('#password').value;// var email = e.elements[0].value;
// console.log(email, password);
// this.userService.getUserDetails(email, password)

