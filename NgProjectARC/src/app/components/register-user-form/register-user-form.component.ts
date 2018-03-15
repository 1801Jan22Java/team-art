import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";

// Gin's!
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent implements OnInit {


  private API_URL: string = "http://localhost:8080/api/user";
  filter: boolean= false;
  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {
  }

  registerUser(data) {
   
   
    console.log(data);
    if (this.filter){       // if checked, Employee - usertype 0, else 1
      data.usertype = 0;
    } else {
      data.usertype = 1;
    }
    this.userService.sendUserInfo(this.API_URL + "/register", data).subscribe();
    alert("congratulation! Now you are registered. please log in.");
    this.router.navigate(['/login']);
  }
}


export interface User {
  id: number,
  email: string,
  name: string,
  usertype: number,
  password: string
}