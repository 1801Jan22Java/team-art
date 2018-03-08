import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AnimalList} from '../managelist-of-animals/managelist-of-animals.component';
import {ManagelistOfAnimalsComponent } from '../managelist-of-animals/managelist-of-animals.component'
//James'!!!!!!! 
@Component({
  selector: 'app-update-animal-profile',
  templateUrl: './update-animal-profile.component.html',
  styleUrls: ['./update-animal-profile.component.css']
})
export class UpdateAnimalProfileComponent implements OnInit {

  rForm: FormGroup;
  iForm: FormGroup;
  post: any;                     // A property for our submitted form
  iPost: any;
  aniID: number= 0;
  adoptstat: string = "";
  gend: string = "";
  mat: string = "";
  pname: string = "";
  spec: string = "";
  image1: string = "";
  image2: string = "";
  image3: string = "";
  image4: string = "";
  animal: AnimalList;
  headers: HttpHeaders;
  
  @ViewChild('image1') image: ElementRef;
  //animal: Observable<AnimalList>;
  private _url: string = "http://localhost:8080/api/animal/updateAnimal";
  private url_: string = "http://localhost:8080/api/image/physicalImage";


  constructor(private fb: FormBuilder, private http: HttpClient,
  private router: Router) {

    this.rForm = fb.group({
      'pname' : [null, Validators.required],
      'mat' : [Validators.required],
      'spec' : [Validators.required],
      'gend' : [Validators.required],
    });

    this.iForm = fb.group({
      'image1' : [null, Validators.required],
      'image2' : [null],
      'image3' : [null],
      'image4' : [null]
    });
   }
  ngOnInit() {
    console.log(this.image);
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
      animalID: 63,
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

    Cancel(){
      console.log("yay")
      this.router.navigate(['/animalList']);
    }

  
    addImages(iPost){
      this.image1 = iPost.image1;
      this.image2 = iPost.image2;
      this.image3 = iPost.image3;
      this.image4 = iPost.image4;
      let fileBrowser = this.image.nativeElement;
      console.log(fileBrowser.files[0]);
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("file", fileBrowser.files[0]);
      
      //formData.append("file"), fileBrowser.
      /*this.headers = new HttpHeaders({
        'Content-Type': 'multipart/form-data'
       });*/
       //'multipart/form-data'
      /*
     let fileList: FileList = iPost.target.files;
      if(fileList.length > 0) {
          let file: File = fileList[0];
          let formData:FormData = new FormData();
          formData.append('uploadFile', file, file.name); */
          //{headers: this.headers}
      let httpSend = this.http.post(this.url_, formData ).subscribe(
        res => {
          console.log(res);
        },
        err => {
         console.log("Error occurred");
          console.log(err);
        }
      );
      console.log("cool");
    }
    console.log(fileBrowser.files[0]);
  }

}
