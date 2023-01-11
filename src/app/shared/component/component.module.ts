import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdown, NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    NgbDropdownModule
  ],
  exports:[
    SideNavComponent
  ]
})
export class ComponentModule { }
