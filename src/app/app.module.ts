import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationComponent, LoginComponent } from './pages/users/index';

import { UsersService } from './services/index';
import { LoginButtons } from './pages/navbarUI/login-buttons';
import { ProfileButtonsComponent } from './pages/navbarUI/profile-buttons';
import { AuthGuard } from './guards/auth.guard';
import { CheckForUserDirective } from './directives/checkForUserDirective';
import { FreelancersListComponent } from './pages/freelancers-list/freelancers-list.component';
import { EmployersListComponent } from './pages/employers-list/employers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LoginButtons,
    ProfileButtonsComponent,
    CheckForUserDirective,
    FreelancersListComponent,
    EmployersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    UsersService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
