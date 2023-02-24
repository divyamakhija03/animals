import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptComponent } from './adopt/adopt.component';
import { FosterComponent } from './foster/foster.component';
import { NgbAccordionModule, NgbDropdown, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



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
    NgbAccordionModule,
    HttpClientModule,
    NgbDropdownModule,
    SharedModule
  ],
  exports :[
    AdoptComponent

  ]
})
export class ServicesModule { }
