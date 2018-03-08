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

  public animal: any = {};
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
    this.animalService.getAnimalWithImgs(this.animalID).subscribe(data => 
      {this.animal = data.animal;
      this.files = data.files;
      this.initFilename = data.files[0].filename;
      this.htmlText = "<img src='http://localhost:8080/resources/image/"+ this.initFilename 
        +"' height='80%' width='auto'>";
      //console.log("animal status?" + data.animal.adoptStatus);
    });
  }
  
  showImage(index){
    console.log('you clicked me! ' + index);
    let imgFile :string = this.files[index].filename;
    this.htmlText = "<img src='http://localhost:8080/resources/image/"+ imgFile 
        +"' height='80%' width='auto'>";
  }

}

