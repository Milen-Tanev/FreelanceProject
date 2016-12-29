import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationComponent, LoginComponent } from './pages/users/index';

import { UsersService } from './services/index';
import { LoginButtons } from './pages/navbarUI/login-buttons';
import { ProfileButtons } from './pages/navbarUI/profile-buttons';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LoginButtons,
    ProfileButtons
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
