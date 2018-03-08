import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ManagelistOfAnimalsComponent } from './components/managelist-of-animals/managelist-of-animals.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ManageVisitorFormsComponent } from './components/manage-visitor-forms/manage-visitor-forms.component';
import { ManageAdoptionFormsComponent } from './components/manage-adoption-forms/manage-adoption-forms.component';
import { AnimalProfileComponent} from './components/animal-profile/animal-profile.component';
import { AdoptionFormComponent } from './components/adoption-form/adoption-form.component';
import { LoginGuard } from './components/login-form/login.guard';
import { VisitorFormComponent } from './components/visitor-form/visitor-form.component';
import { UpdateUserProfileComponent } from './components/update-user-profile/update-user-profile.component';
import { RegisterAnimalFormComponent } from './components/register-animal-form/register-animal-form.component';
import { UpdateAnimalProfileComponent } from './components/update-animal-profile/update-animal-profile.component';
import { RegisterUserFormComponent, } from './components/register-user-form/register-user-form.component';
const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'adoptionForms', component: ManageAdoptionFormsComponent, canActivate: [LoginGuard]  },
  { path: 'visitorForms', component: ManageVisitorFormsComponent }, 
  { path: 'calendar', component: CalendarComponent },
  { path: 'visits', component: ManageVisitorFormsComponent },
  { path: 'animalList', component: ManagelistOfAnimalsComponent },
  { path: 'animalProfile/:animalID', component : AnimalProfileComponent},
  { path: 'adoptionForm', component: AdoptionFormComponent},
  { path: 'visitorForm', component : VisitorFormComponent},
  { path: 'updateAnimalProfile', component : UpdateAnimalProfileComponent},
  { path: 'updateUserProfile', component : UpdateUserProfileComponent},
  { path: 'registerAnimalForm', component : RegisterAnimalFormComponent},
  { path: 'registerUserForm', component : RegisterUserFormComponent},
  { path: '**', redirectTo: '/homepage' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

//export const APP_ROUTES_PROVIDER = [
//  provideRouter(routes)
//]