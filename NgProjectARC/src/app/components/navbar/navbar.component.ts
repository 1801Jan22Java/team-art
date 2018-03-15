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
  private API_URL: string = "http://localhost:8080/api/user";

  constructor(
    private userService: UserService,
    public userApp: UserService,
    private router: Router) {}

  ngOnInit() {

    // always listen to 
    if (localStorage.getItem('userID') != null) {
      console.log('we have userID!' + localStorage.getItem('userID'));
    }

  }
 
  login(data) {
    this.userService.sendUserInfo(this.API_URL + "/login", data)
      .subscribe(data => {
        let name: number = +JSON.parse(data.text()).userID;

        if (!name) {
          alert('The email does not exist or wrong password. please try again.');
          
        } else {
          console.log(JSON.parse(data.text()).usertype);
          localStorage.setItem("userID", JSON.parse(data.text()).userID);
          localStorage.setItem("usertype", JSON.parse(data.text()).usertype);
          alert('Welcome, user ' + JSON.parse(data.text()).name + " !!");
          this.router.navigate(['/homepage']);
         // window.location.reload();
        }
      })
  }

  logout() {
    alert('we will miss you! see you soon again!');
    localStorage.removeItem('userID');
    this.router.navigate(['/homepage']);
  }

}
