import { ApplicationService } from '../../service/application.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";

// GIN!!!!!!!!!
@Component({
  selector: 'app-adoption-form',
  templateUrl: './adoption-form.component.html',
  styleUrls: ['./adoption-form.component.css']
})
export class AdoptionFormComponent implements OnInit {

  public userID : number;
  public animalID : number;
  public animalName : string;
  public address: string;
  public profession: string;
  public phone: string;
  public housetype: string;
  public msg: any;
  private API_URL: string = "http://localhost:8080/api/application";
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private applicationService : ApplicationService,
    private router: Router) { 
    this.animalID = activatedRoute.snapshot.params['animalID'];
    this.animalName = activatedRoute.snapshot.params['animalName'];
  }
  
  ngOnInit() {
    // now I have animalID for adoption.
    this.userID= +localStorage.getItem("userID");
    
  }

   applyAdoption(data){
      // check if the form data includes necessary information.
     //console.log("am i using data"+ JSON.stringify(data));
     if (this.address == null){
       alert('address is mandatory information.');
       return;
     }
     if (this.profession == null){
       alert('profession is mandatory information.');
       return;
     }
     if (this.phone == null){
       alert('phone is mandatory information.');
       return;
     }
     if (this.housetype == null){
       alert('housetype is mandatory information.');
       return;
     }
     this.applicationService.sendAdoptApplication(this.API_URL +"/adoptApplication.json", data)
     .subscribe();
     alert('Your adoption application on ' +this.animalName + ' is submitted!');
     this.router.navigate(['/homepage']);
     
   }
  
  
}
