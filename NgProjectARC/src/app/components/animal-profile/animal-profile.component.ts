import { AnimalService } from '../../service/animal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Gin's'!!!!!!! 
@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.css']
})
export class AnimalProfileComponent implements OnInit {

  public animal = {};
  public files = [];
   htmlText: string;

  public initFilename:string;
  animalID : string;
  constructor(
      private activatedRoute : ActivatedRoute,
      private animalService: AnimalService) { 
      this.animalID = activatedRoute.snapshot.params['animalID'];
  }

  ngOnInit() {
    this.getAnimalProfile();
  }
  getAnimalProfile(){
    console.log("animal Id? : "+ this.animalID);
    this.animalService.getAnimalWithImgs(this.animalID).subscribe(data => 
      {this.animal = data.animal;
      this.files = data.files;
      this.initFilename = data.files[0].filename;
      this.htmlText = "<img src='http://localhost:8080/resources/image/"+ this.initFilename 
        +"' height='80%' width='auto'>";
      
    //console.log("I got data:"+ JSON.stringify(data));
      //console.log("files?"+data.files);
    });
  }

}
