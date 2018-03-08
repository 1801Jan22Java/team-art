import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalList } from '../components/managelist-of-animals/managelist-of-animals.component';
import { Observable } from 'rxjs/Observable';
import { Animal } from '../models/animal';
@Injectable()
export class AnimalService {


  //Evan
  
  
  // James
  private _url: string = "http://localhost:8080/api/animal/animalList.json";
  constructor(private http: HttpClient) { }

  getApplication(): Observable<AnimalList[]>{
    //console.log(this.http.get(this._url));
    //console.log(this.http.get<AnimalList[]>(this._url));
    return this.http.get<AnimalList[]>(this._url);
  }
  
  addAnimal(animal): Observable<AnimalList[]>{
    return this.http.post<AnimalList[]>('http://localhost:8080/api/image/addAnimal.json', animal);
  }
  // Eric
  private ROOT_URL: string = "http://localhost:8080/api/animal";
  getAnimalById(animalID: number): Observable<Animal> {
    return this.http.post<Animal>(this.ROOT_URL + '/getAnimalById', animalID);
  }

  getAnimals(): Observable<Animal[]>{
    //console.log(this.http.get(this._url));
    //console.log(this.http.get<AnimalList[]>(this._url));
    return this.http.get<Animal[]>(this.ROOT_URL + '/animalList.json');
  }
  
  // Gin
  // get multiple animals with an image
  private animalWithImg : string = "http://localhost:8080/api/animal/animalsWithFile.json";
  getAnimalsWithImg(): Observable<FileList[]>{
    return this.http.get<FileList[]>(this.animalWithImg);
  }
  // get an animal with multiple images
  private animalWithImgs : string = "http://localhost:8080/api/animal/animalWithFiles.json";
  
  getAnimalWithImgs(animalID): Observable<AnimalWithImages>{
    
    let paramforID = new URLSearchParams();
    paramforID.append("animalID", animalID);
    return this.http.get<AnimalWithImages>("http://localhost:8080/api/animal/animalWithFiles.json?animalID="+ animalID);
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
export interface AnimalWithImages {
  animal: Animal;
  files : FileList[];
}