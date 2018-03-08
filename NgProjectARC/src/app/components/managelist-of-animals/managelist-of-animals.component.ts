import { Component, OnInit } from '@angular/core';
//import { Animal } from './Animals';
import { AnimalService } from '../../service/animal.service';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-managelist-of-animals',
  templateUrl: './managelist-of-animals.component.html',
  styleUrls: ['./managelist-of-animals.component.css']
})
export class ManagelistOfAnimalsComponent implements OnInit{
  //public animals: AnimalList[] = [];

  
 public animals :any = [];
 public myData :AnimalList[] = [];
 public maxSize :number;
 public upani :Animal;
 public upString :any;
 public Happy() {console.log("yay")};
 // Eric Begin
 show = true;
 sortBy = '';
 manageForm = false;
 currentAnimal: Animal;
 registeredAnimals: Animal[];
 // Eric End

  // public animal2: AnimalList[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals().subscribe(data => {
      this.registeredAnimals = data;
      console.log(data);
    });
    //this.animalService.getApplication().subscribe(data )
    //console.log( this.animalService.getApplication().subscribe(data));
    this.animals = this.animalService.getApplication().subscribe(data => {
      this.animals = data;
      this.myData = data;
     // console.log(this.myData);
      //console.log(this.animals);
      //this.populateAnimals();
    });
    //this.animalService.getApplication().subscribe(data => this.animals = data );
   // console.log(this.animals);
  // console.log(this.myData);
   //console.log(this.hi);
    //this.animalService.getApplication().map((response) ⇒ response.json()).subscribe(data => this.animals = data);
    //console.log(this.animals[0].name);
    

  //this.populateAnimals();


  }

  // Eric Begin
  toggleRow() {
    this.show = !this.show;
  }
  
  sortRows(type) {
    this.sortBy = type;
  }
  showForm(animal) {
    this.manageForm = false;
    this.currentAnimal = animal;
    this.manageForm = true;
  }
  // Eric End

  



}

export interface AnimalList {
  animalID: number;
	name: string;
	maturity: string;
	gender: string;
	adoptStatus: string;
  species: string;
  
}