import { MeetupService } from '../../service/meetup.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

  // Gin!!!!!
@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {

  public userID : number;
  public animalID: number;
  public animalName: string;
  public meetupday: string;
  public meetuptime: string;
  public msg:any;
  
  private API_URL: string = "http://localhost:8080/api/meetup";
  constructor(
    private activatedRoute: ActivatedRoute,
    private meetupService: MeetupService,
     private router: Router
  ) {
    this.animalID = activatedRoute.snapshot.params['animalID'];
    this.animalName = activatedRoute.snapshot.params['animalName'];
  }

  ngOnInit() {
    this.userID= +localStorage.getItem("userID");
    //console.log(this.animalID+"/"+this.animalName+"/"+this.userID);
  }

  
  applyMeetup (data){
    console.log(data);
    if (this.meetupday == null){
      alert('Date of Visit is mandatory information.');
      return;
    }
      if (this.meetuptime == null){
      alert('Date of Visit is mandatory information.');
      return;
    }
    
   this.meetupService.sendMeetupForm(this.API_URL+ "/visitorForm.json", data)
      .subscribe();
      alert("Success!!");
      this.router.navigate(['/homepage']);
  }
  
  
  
}
