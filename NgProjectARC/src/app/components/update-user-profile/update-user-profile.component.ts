import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';

//Evans'!!!!!!! 
@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {

  user: User;
  public userID: number;
  constructor(public userProfile: UserProfileComponent, private userService: UserService) {
}

ngOnInit() {
  this.userID = +localStorage.getItem('userID');
  this.userService.getInfo(this.userID).subscribe(data => {
    this.user = data;
  });
}

updateName(event: any) {
  if(event !== "") {
    this.user.name = event.target.value;
  }
    
}
updateEmail(event: any) {
  if(event !== "") {
    this.user.email = event.target.value;
  }
    
}
updatePassword(event: any) {
  if(event !== "") {
    this.user.password = event.target.value;
  }
}

toggle(){
  this.userProfile.show = false;
}

onSubmit(){
  this.userProfile.userInfo.name = this.user.name;
  this.userProfile.userInfo.email = this.user.email;
  this.userProfile.userInfo.password = this.user.password;
  this.userService.updateInfo(this.user);
  this.toggle();
}
}
