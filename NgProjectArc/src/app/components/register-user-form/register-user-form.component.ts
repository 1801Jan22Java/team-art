import { Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent implements OnInit {

  name: String = '';
  email: String = '';
  password: String = '';

  show = false;

  constructor(private loginForm: LoginFormComponent) { }

  ngOnInit() {
  }

  register(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  hide() {
    this.show = true;
    if (this.loginForm.show === false) {
      this.loginForm.show = true;
    }
  }
}
