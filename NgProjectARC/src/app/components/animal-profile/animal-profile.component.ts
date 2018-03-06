import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//Gin's'!!!!!!! 
@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent implements OnInit {

  animalID : number;
  constructor(private activatedRoute : ActivatedRoute) { 
      this.animalID = +activatedRoute.snapshot.params['animalID'];
  }

  imgFileName1:string = "assets/images/pet1.jpg";
  ngOnInit() {
  }

}
