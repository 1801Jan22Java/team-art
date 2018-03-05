import {UserService} from '../../service/user.service';
import {LoginFormComponent} from '../login-form/login-form.component';
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BehaviorSubject} from 'rxjs';

//Gins'!!!!!!! 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userID: number = 0;
  user: {};
  isLogin: boolean = false;
  private API_URL: string = "http://localhost:8080/api/user";

  constructor(
    private userService: UserService,
    private router: Router) {}

  ngOnInit() {

    // always listen to 
    if (localStorage.getItem('userID') != null) {
      console.log('we have userID!' + localStorage.getItem('userID'));
      this.isLogin = true;
    }

  }

  login(data) {
    this.userService.sendUserInfo(this.API_URL + "/login", data)
      .subscribe(data => {
        let name: number = +JSON.parse(data.text()).userID;
        console.log("what did I get?" + name)

        if (!name) {
          alert('The email does not exist or wrong password. please try again.');
          window.location.reload();

        } else {
          alert('Welcome, user ' + JSON.parse(data.text()).name + " !!");
          localStorage.setItem("userID", JSON.parse(data.text()).userID);
          this.isLogin = true;
          this.router.navigate(['/homepage']);
          window.location.reload();
        }
      })
  }

  logout() {
    alert('we will miss you! see you soon again!');
    localStorage.removeItem('userID');
    this.isLogin = false;
  }

}
