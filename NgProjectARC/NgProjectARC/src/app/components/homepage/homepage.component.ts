import { Component, OnInit, Input } from '@angular/core';

//James'!!!!!!! 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  
  imgFileName1:string = "assets/images/pet1.jpg";
  imgFileName2:string = "assets/images/pet2.jpg";
  imgFileName3:string = "assets/images/pet3.jpg";
  imgFileName4:string = "assets/images/pet4.jpg";
   
  ngOnInit() {
  }

}
