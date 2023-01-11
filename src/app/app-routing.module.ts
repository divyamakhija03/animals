import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './administrator/admin/admin.component';
import { RegisterComponent } from './authentication/register/register.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { DonateComponent } from './get-involved/donate/donate.component';
import { FundraiserComponent } from './get-involved/fundraiser/fundraiser.component';
import { VolunteerComponent } from './get-involved/volunteer/volunteer.component';
import { HomeComponent } from './home/home/home.component';
import { AdoptComponent } from './services/adopt/adopt.component';
import { FosterComponent } from './services/foster/foster.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'adopt',component:AdoptComponent},
  {path:'foster',component:FosterComponent},
  {path:'volunteer',component:VolunteerComponent},
  {path:'donate',component:DonateComponent},
  {path:'fundraiser',component:FundraiserComponent},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'admin',component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
