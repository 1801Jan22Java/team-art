import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import { AnimalList } from '../managelist-of-animals/managelist-of-animals.component';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import {ManagelistOfAnimalsComponent } from '../managelist-of-animals/managelist-of-animals.component'
import {File} from '../../models/file';
import { AnimalService } from '../../service/animal.service';
import { ImageService } from '../../service/image.service';
import {Http, Response} from '@angular/http';

//James'!!!!!!! 
@Component({
  selector: 'app-register-animal-form',
  templateUrl: './register-animal-form.component.html',
  styleUrls: ['./register-animal-form.component.css']
})
export class RegisterAnimalFormComponent implements OnInit {
  
  rForm: FormGroup;
  iForm: FormGroup;
  post: any;                     // A property for our submitted form
  aniID: number= 0;
  adoptstat: string = "";
  gend: string = "";
  mat: string = "";
  pname: string = "";
  spec: string = "";
  image1: string = "";
  animal: AnimalList;
  headers: HttpHeaders;
  aniData: number = 0;
  fileName: string = "";
  naming: any;
  tempAnimal: AnimalList;
  ourFile: File;
  timerz :number = 0;
  loopz: any;
  animalID:number;
  temp: AnimalList[];
  @ViewChild('image1') im0: ElementRef;
  @ViewChild('image2') im1: ElementRef;
  @ViewChild('image3') im2: ElementRef;
  @ViewChild('image4') im3: ElementRef;

@ViewChild('mgForm') form: NgForm;
  
  //animal: Observable<AnimalList>;
  private _url: string = "http://localhost:8080/api/animal/addAnimal";
  private url_: string = "http://localhost:8080/api/image/physicalImage";
  private _url_ : string = "http://localhost:8080/api/image/mapToAnimal";

  
  constructor(private fb: FormBuilder, private http: HttpClient,
    private router: Router, private animalService: AnimalService,
    private imageService : ImageService,
    private http2: Http) {

    
    this.rForm = fb.group({
      'pname' : [null, Validators.required],
      'mat' : [Validators.required],
      'spec' : [Validators.required],
      'gend' : [Validators.required]     
    });

   this.iForm = fb.group({
    'image1' : [null, Validators.required],
    'image2' : [null],
    'image3' : [null],
    'image4' : [null]
  });
 }
  
  ngOnInit() {
    
  }
 file = null;
 successMsg= null;
 errorMsg= null;
 getFiles(files: any) {
  let empDataFiles: FileList = files.files;
  this.file = empDataFiles[0];
}
 
postfile() {
  if (this.file !== undefined) {
    this.imageService.postFormData(this.file).map(responce => {
    }).catch(error => this.imageService = error);
    setTimeout(() => {
      this.successMsg = "Successfully uploaded !!";
    }, 10000);
  } else {
    //show error
  }
}
  
  addPost(post) {
    this.pname = post.pname;
    this.mat = post.mat;
    this.spec = post.spec;
    this.gend = post.gend;
//    console.log(this.pname);
//    console.log(this.mat);
//    
//    console.log(this.spec);
//    console.log(this.gend);
    this.animal = {
      animalID: 1,
      name : this.pname,
      maturity : this.mat,
      gender : this.gend,
      adoptStatus : "Available",
      species : this.spec 
    };
   
   
    // add animal text info
    let httpSend = this.http2.post(this._url, this.animal).subscribe(res => {
      this.animalID = +JSON.parse(res.text()).animalID;
      alert('The animal information is successfully submitted! Please save the images.');
    });
   // this.router.navigate(['/animalList']);
    }
    
  Cancel(){
    console.log("yay")
    this.router.navigate(['/animalList']);
  }
  
  
  addImages(iPost){
    const formData = new FormData();
    let fileBrowser = [
      this.im0.nativeElement,
      this.im1.nativeElement,
      this.im2.nativeElement,
      this.im3.nativeElement
    ]
 
   for (let i = 0; i < 4; i++){
      if (fileBrowser[i].files && fileBrowser[i].files[0]) {
        formData.append("file", fileBrowser[i].files[0]);
         
        let httpSend = this.http.post(this.url_+ "?animalID="+ this.animalID, formData ).subscribe(
          res => {
            console.log(res);
          },
          err => {
           console.log("Error occurred");
            console.log(err);
          }
        );
        console.log("cool");
      
      console.log(fileBrowser[i].files[0]);
  
      this.aniData = 63;
      this.naming = fileBrowser[i].files[0].name;
      this.tempAnimal = {
        animalID: this.aniData,
        name: null,
        maturity: null,
        gender: null,
        adoptStatus: null,
        species: null
      };
  
      this.ourFile = {
          fileID: null,
          filename: this.naming,
          animal: this.tempAnimal
      };
  
      httpSend = this.http.post(this._url_, this.ourFile ).subscribe(
        res => {
          console.log(res);
        },
        err => {
         console.log("Error occurred");
          console.log(err);
        }
      );

    }
  }

}



  


}