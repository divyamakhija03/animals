import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { DonateComponent } from './donate/donate.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ngbCarouselTransitionIn } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FundraiserComponent } from './fundraiser/fundraiser.component';



@NgModule({
  declarations: [
    VolunteerComponent,
    DonateComponent,
    FundraiserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class GetInvolvedModule { }
