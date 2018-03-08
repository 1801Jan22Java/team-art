import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { Meetup } from '../../models/meetup'
import { MeetupService } from '../../service/meetup.service';
import { ApplicationService } from '../../service/application.service';
import { Application } from '../../models/application';
//Evan's!!!!!!! 
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userID: number;
  public userInfo: User;
  public meetups: Meetup[];
  public applications: Application[];
  show = false;

  constructor(private userService: UserService, private meetupService: MeetupService,
    private applicationService: ApplicationService) { 
  
  
  }


  //+localStorage.getItem('userID')
  ngOnInit() {
    this.userID = +localStorage.getItem('userID');
    this.userService.getInfo(this.userID).subscribe(data => {
      this.userInfo = data;
      console.log( data);
    });
    this.applicationService.getInfo(this.userID).subscribe(data => {
      this.applications = data;
      console.log(data);
    });
    console.log('does it reach here?');
    this.meetupService.getInfo(this.userID).subscribe(data => 
      {this.meetups = data;  console.log(data);
	  });
  }

  showUpdateForm(){
    this.show = true;
  }
}
