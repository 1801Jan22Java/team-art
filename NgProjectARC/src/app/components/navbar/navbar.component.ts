import {UserService} from '../../service/user.service';
import {LoginFormComponent} from '../login-form/login-form.component';
import {Component, OnInit} from '@angular/core';

//Gins'!!!!!!! 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userID: number;
  user: {};
  isLogin: boolean = false;

  constructor(
    private userService: UserService) {}

  ngOnInit() {

    
    // initial userID
    //console.log(" if login?:" + this.isLogin); 
    // watch if it's logged-in user or not.
    this.userService.currentMessage.subscribe(message => {
      this.userID = message;
      if (localStorage.getItem('user')) {
        this.user = localStorage.getItem('user')    // get userInfo from session
        console.log(this.user);
      }

      if (this.userID) {
        this.isLogin = true;
      }
      console.log(" if login? :" + this.isLogin);

    })

  }

   
}
