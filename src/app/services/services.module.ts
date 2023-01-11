import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptComponent } from './adopt/adopt.component';
import { FosterComponent } from './foster/foster.component';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdoptComponent,
    FosterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    NgbAccordionModule
  ],
  exports :[
    AdoptComponent

  ]
})
export class ServicesModule { }
