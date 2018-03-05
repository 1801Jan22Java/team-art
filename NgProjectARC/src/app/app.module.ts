import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AnimalProfilesComponent } from './components/animal-profiles/animal-profiles.component';
import { AnimalProfileComponent } from './components/animal-profile/animal-profile.component';
import { AdoptionFormComponent } from './components/adoption-form/adoption-form.component';
import { VisitorFormComponent } from './components/visitor-form/visitor-form.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { ManageAdoptionFormsComponent } from './components/manage-adoption-forms/manage-adoption-forms.component';
import { ListOfAdoptionFormsComponent } from './components/list-of-adoption-forms/list-of-adoption-forms.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ManageVisitorFormsComponent } from './components/manage-visitor-forms/manage-visitor-forms.component';
import { ManagelistOfAnimalsComponent } from './components/managelist-of-animals/managelist-of-animals.component';
import { RegisterAnimalFormComponent } from './components/register-animal-form/register-animal-form.component';
import { UpdateAnimalProfileComponent } from './components/update-animal-profile/update-animal-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApproveDenyAdoptionComponent } from './components/approve-deny-adoption/approve-deny-adoption.component';
import { LoginGuard } from './components/login-form/login.guard';
import {ApplicationService} from './service/application.service';
import { UserService } from './service/user.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeetupService } from './service/meetup.service';
import { AnimalService } from './service/animal.service';
import { ImageService } from './service/image.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterUserFormComponent,
    HomepageComponent,
    AnimalProfilesComponent,
    AnimalProfileComponent,
    AdoptionFormComponent,
    VisitorFormComponent,
    UserProfileComponent,
    UpdateUserProfileComponent,
    ManageAdoptionFormsComponent,
    ListOfAdoptionFormsComponent,
    CalendarComponent,
    ManageVisitorFormsComponent,
    ManagelistOfAnimalsComponent,
    RegisterAnimalFormComponent,
    UpdateAnimalProfileComponent,
    NavbarComponent,
    ApproveDenyAdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,    // to user HttpClient
    FormsModule
  ],
  providers: [ApplicationService, UserService, MeetupService, AnimalService, ImageService, LoginGuard,
  NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
