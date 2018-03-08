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
    return this.http.post<AnimalList[]>('http://localhost:8080/api/image/mapToAnimal.json', animal);
  }
  // Eric
  
  
  // Gin
  
  
}
