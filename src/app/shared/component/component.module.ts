import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { Router, RouterModule } from '@angular/router';
import { NgbDropdown, NgbDropdownModule, NgbNavModule, NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './toast/toast.component';



@NgModule({
  declarations: [
    SideNavComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbToastModule
  ],
  exports:[
    SideNavComponent,
    ToastComponent
  ]
})
export class ComponentModule { }
