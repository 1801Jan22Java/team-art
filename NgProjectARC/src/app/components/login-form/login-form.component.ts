 
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

//Gin'!!!!!!! 
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  private API_URL: string = "http://localhost:8080/api/user";

  constructor(
    private userService: UserService) {}

  ngOnInit() {
  }
  login(data) {
    // alert("Entered Email ID is " + data.email);
    this.userService.sendUserInfo(this.API_URL + "/login", data);
  }
}


//    this.http.post(
//      this.API_URL+"/login",   // url
//      JSON.stringify(data),
//      {headers: this.headers}
//    ).subscribe(
//      res => {const response = res.text(); }
//    )

  // private API_URL: string = "http://localhost:8080/api/user";
  // private API_RESULT: string = "";

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

