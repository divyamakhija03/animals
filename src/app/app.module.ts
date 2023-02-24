import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ServicesModule } from './services/services.module';
import { GetInvolvedModule } from './get-involved/get-involved.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { ComponentModule } from "./shared/component/component.module";
import { AdministratorModule } from './administrator/administrator.module';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        SharedModule,
        GetInvolvedModule,
        HomeModule,
        ServicesModule,
        HomeModule,
        ComponentModule,
        AdministratorModule,
        AuthenticationModule
    ]
})
export class AppModule { }
