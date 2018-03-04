import { UserService } from '../../service/user.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { Component, OnInit } from '@angular/core';

//Gins'!!!!!!! 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  message : string;
  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.userService.currentMessage.subscribe(message => {
      this.message = message;
      console.log("username:"+message);
    })
  }

  receiveMessage(){
    
  }
}
