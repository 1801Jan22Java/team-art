import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';

//Evans'!!!!!!! 
@Component({
  selector: 'app-update-user-profile',
  templateUrl: './update-user-profile.component.html',
  styleUrls: ['./update-user-profile.component.css']
})
export class UpdateUserProfileComponent implements OnInit {

  user: User;

  updateUser: FormGroup;
  userID: number;                     // A property for our submitted form
  usertype: number;
  name: string;
  email: string;
  password: string;

  constructor(private userProfile: UserProfileComponent, private userService: UserService, private fb: FormBuilder) {
    this.user = this.userProfile.userInfo;

    this.updateUser = fb.group({
      'name' : [this.user.name, Validators.minLength(1)],
      'email' : [this.user.email, Validators.minLength(1)],
      'password' : [this.user.password, Validators.minLength(1)],
      'userID' : [this.user.userID],
      'usertype' : [this.user.usertype]
    });
}

ngOnInit() {
  this.user = this.userProfile.userInfo;
}

toggle(){
  this.userProfile.show = false;
}

onSubmit(data){
  this.user.name = data.name;
  this.user.email = data.email;
  this.user.password = data.password;
  console.log(this.user.password);
  this.userService.updateUserInfo(this.user);
  //this.toggle();
}
}
