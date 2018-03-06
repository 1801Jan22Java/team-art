import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalList } from '../managelist-of-animals/managelist-of-animals.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
//James'!!!!!!! 
@Component({
  selector: 'app-register-animal-form',
  templateUrl: './register-animal-form.component.html',
  styleUrls: ['./register-animal-form.component.css']
})
export class RegisterAnimalFormComponent implements OnInit {
  
  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  aniID: number= 0;
  adoptstat: string = "";
  gend: string = "";
  mat: string = "";
  pname: string = "";
  spec: string = "";
  animal: AnimalList;
  //animal: Observable<AnimalList>;
  private _url: string = "http://localhost:8080/api/animal/addAnimal";


  constructor(private fb: FormBuilder, private http: HttpClient) {

    this.rForm = fb.group({
      'pname' : [null, Validators.required],
      'mat' : [Validators.required],
      'spec' : [Validators.required],
      'gend' : [Validators.required]     
    });
   }

  

  ngOnInit() {
  }

  addPost(post) {
    this.pname = post.pname;
    this.mat = post.mat;
    this.spec = post.spec;
    this.gend = post.gend;
    console.log(this.pname);
    console.log(this.mat);
    console.log(this.spec);
    console.log(this.gend);
    this.animal = {
      animalID: null,
      name : this.pname,
      maturity : this.mat,
      gender : this.gend,
      adoptStatus : "Available",
      species : this.spec 
    };

    console.log(this.animal);
    let httpSend = this.http.post(this._url, this.animal).subscribe(
      res => {
        console.log(res);
      },
      err => {
       console.log("Error occurred");
        console.log(err);
      }
    );
    console.log(httpSend);

    }
    
  

}
