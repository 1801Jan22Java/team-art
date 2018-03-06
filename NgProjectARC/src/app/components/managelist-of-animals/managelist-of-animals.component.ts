import { Component, OnInit } from '@angular/core';
import { Animal } from './Animals';
import { AnimalService } from '../../service/animal.service';

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
  // public animal2: AnimalList[] = [];

  constructor(private animalService: AnimalService) { }
  httpdata;
  ngOnInit() {
    //this.animalService.getApplication().subscribe(data )
    //console.log( this.animalService.getApplication().subscribe(data));
    this.animals = this.animalService.getApplication().subscribe(data => {
      this.animals = data;
      this.myData = data;
     // console.log(this.myData);
      //console.log(this.animals);
      this.populateAnimals();
    });
    //this.animalService.getApplication().subscribe(data => this.animals = data );
   // console.log(this.animals);
  // console.log(this.myData);
   //console.log(this.hi);
    //this.animalService.getApplication().map((response) ⇒ response.json()).subscribe(data => this.animals = data);
    //console.log(this.animals[0].name);
    

  //this.populateAnimals();


  }




  populateAnimals(){
    
    //console.log(this.animals[0].name);

    let animals = this.animals; 
    console.log(animals);
    //let maxSize :number =3;
    this.maxSize = Object.keys(animals).length;
    console.log(this.maxSize);
    // maxSize =3;
/*
    for (let i = 0; i < maxSize; i++)    {
      animals[i] = new Animal();
      animals[i].animalId = i;
      if (i%2==0)   {
        animals[i].gender = "Female";
      } else {
        animals[i].gender = "Male";
      }
      if (i%3==0) {
        animals[i].adoptStatus = "Adopted";
      } else {
        animals[i].adoptStatus = "Available";
      }
            
    }
*/
    /*
    animals[0].maturity = "Adult";
    animals[1].maturity = "Young";
    animals[2].maturity = "Young";
    animals[3].maturity = "Adult";
    animals[4].maturity = "Mature";
    animals[5].maturity = "Adult";
    animals[0].name = "Emily";
    animals[1].name = "Tom";
    animals[2].name = "Sarah";
    animals[3].name = "John";
    animals[4].name = "Isabella";
    animals[5].name = "Wart"
    animals[0].species = "Dog";
    animals[1].species = "Cat";
    animals[2].species = "Fish";
    animals[3].species = "Octopus";
    animals[4].species = "Cat";
    animals[5].species = "Dog";
*/


    let bodyHTML = document.getElementById("aniBody");
    for (let i = 0; i < this.maxSize; i++){
      let tr = document.createElement("tr");
      tr.id = "tr" + i;
      let th = document.createElement("a");
      th.className = "nav-link";
      th.href= "/updateAnimalProfile";
      //th.scope = "row";
      th.id = "a" + i;
      //th.setAttribute("onclick", "Cool()");
      th.innerHTML = "" + animals[i].animalID;
      let td1 = document.createElement("td");
      td1.innerHTML = animals[i].name;
      let td2 = document.createElement("td");
      td2.innerHTML = animals[i].species;
      let td3 = document.createElement("td");
      td3.innerHTML = animals[i].gender;
      let td4 = document.createElement("td");
      td4.innerHTML = animals[i].maturity;
      let td5 = document.createElement("td");
      td5.innerHTML = animals[i].adoptStatus;
      td5.id = "td" + i;
      tr.appendChild(th);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      bodyHTML.appendChild(tr);

      //animals[4].adoptStatus = "Pending";

    

    }

  }

  ShowAll(){

    //let maxSize :number =this.maxSize;
    for (let i = 0; i < this.maxSize; i++){
      let tempDisplayVar = document.getElementById("tr"+i);
      tempDisplayVar.style.display = "table-row";
    }

  }



  ShowAvailable(){

    //let maxSize :number = 3;
    for (let i = 0; i < this.maxSize; i++){
      let tempDisplayVar = document.getElementById("tr"+i);
      let tempStatusVar = document.getElementById("td"+i);
      if (tempStatusVar.innerHTML=="Available")
      {
          tempDisplayVar.style.display = "table-row";
      }
      else {
        tempDisplayVar.style.display = "none";
      }
    }

  }


  ShowAdopted(){

    //let maxSize :number = 3;
    for (let i = 0; i < this.maxSize; i++){
      let tempDisplayVar = document.getElementById("tr"+i);
      let tempStatusVar = document.getElementById("td"+i);
      if (tempStatusVar.innerHTML=="Adopted")
      {
          tempDisplayVar.style.display = "table-row";
      }
      else {
        tempDisplayVar.style.display = "none";
      }
    }

  }

  ShowPending(){

    //let maxSize :number = 3;
    for (let i = 0; i < this.maxSize; i++){
      let tempDisplayVar = document.getElementById("tr"+i);
      let tempStatusVar = document.getElementById("td"+i);
      if (tempStatusVar.innerHTML=="Pending")
      {
          tempDisplayVar.style.display = "table-row";
      }
      else {
        tempDisplayVar.style.display = "none";
      }
    }


  }

  goToUpdate(){
    /*
      console.log(th);
      this.upString = document.getElementById(th);
      this.upani.animalId = this.upString.innerHTML;
      console.log(this.upani.animalId);
      */
  }



}

export interface AnimalList {
  animalID: number;
	name: string;
	maturity: string;
	gender: string;
	adoptStatus: string;
  species: string;
  
}