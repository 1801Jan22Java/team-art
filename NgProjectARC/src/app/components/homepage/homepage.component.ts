import { AnimalService } from '../../service/animal.service';
import { Component, OnInit, Input } from '@angular/core';

//Gin!!!!
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public animalWithImgs = [];
  constructor(
    private animalService: AnimalService) { }
  
  imgFileName1:string = "assets/images/pet1.jpg";
  imgFileName2:string = "assets/images/pet2.jpg";
  imgFileName3:string = "assets/images/pet3.jpg";
  imgFileName4:string = "assets/images/pet4.jpg";
   
  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this.animalService.getAnimalWithImgs().subscribe(data => this.animalWithImgs = data);
  }
}

export interface FileList {
  filename: string;
  animal: Animal;
  filelID: number;
}
export interface Animal {
  animalID: number;
  name: string;
  maturity: string;
  gender: string;
  adoptStatus: string;
  species: string;
}

/* 
 sealSearch(term: string): Observable<DeiInstance[]> {
      return this.http.get(this.sealUrl + term)
           .map(response => response.json() as DeiInstance[])
           .catch(this.handleError);
 }
*/