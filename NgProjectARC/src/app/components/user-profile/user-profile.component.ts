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

  public userInfo: User;
  public meetups: Meetup[];
  public applications: Application[];
  show = false;

  constructor(private userService: UserService, private meetupService: MeetupService,
    private applicationService: ApplicationService) { }


  //+localStorage.getItem('userID')
  ngOnInit() {
    this.userService.getInfo(43).subscribe(data => {
      this.userInfo = data;
    });
    this.applicationService.getInfo(43).subscribe(data => this.applications = data);
    this.meetupService.getInfo(43).subscribe(data => this.meetups = data);
  }

  showUpdateForm(){
    this.show = true;
  }
}
