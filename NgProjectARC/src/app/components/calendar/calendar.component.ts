import { MeetupService } from '../../service/meetup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
  
  // Gin!!!!
export class CalendarComponent implements OnInit {

  sDate: string ;
  sYear: number = 2018;
  sMonth:number= 3;
  public meetups = [];
  constructor(
     private meetupService: MeetupService) { }
  
  ngOnInit() {
    this.getMeetUps();
  }
  
  movePrev(){
      if(this.sMonth == 1){
        this.sYear--;
        this.sMonth = 12;
        this.sDate = this.sYear + "-" + this.sMonth;
      }  else {
        this.sMonth --;
        if (this.sMonth < 10){
          this.sDate = this.sYear + "-0" + this.sMonth;          
        } else {
          this.sDate = this.sYear + "-" + this.sMonth;
        }
      }
   this.getMeetUps();
  }
  moveNext(){
    if (this.sMonth == 12){
      this.sYear++;
      this.sMonth = 1;
      this.sDate = this.sYear + "-0" + this.sMonth;
    } else {
      this.sMonth++;
      if (this.sMonth < 10){
          this.sDate = this.sYear + "-0" + this.sMonth;          
        } else {
          this.sDate = this.sYear + "-" + this.sMonth;
        }
    }
    this.getMeetUps();
  }
  
  getMeetUps(){
    if (this.sMonth<10){
      this.sDate = String(this.sYear)+'-0'+ String(this.sMonth);
    } else {
      this.sDate = String(this.sYear)+'-'+ String(this.sMonth);
    }
    this.meetupService.getMeetupList(this.sDate).subscribe(data=> {
      this.meetups = data;
      console.log(this.meetups);
    });
  }
//totalVisitor
 //day
}
