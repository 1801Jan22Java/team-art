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
     
  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this.animalService.getAnimalsWithImg().subscribe(data => this.animalWithImgs = data);
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
