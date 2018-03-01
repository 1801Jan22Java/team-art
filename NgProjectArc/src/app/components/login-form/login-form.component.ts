import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email: String = '';
  password: String = '';
  show = true;

  constructor() {
  }

  ngOnInit() {
  }

  login(email, password) {
    this.email = email;
    this.password = password;
  }

  hide() {
    this.show = false;
  }
}
