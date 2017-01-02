import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './app-routing.module';

import { AuthGuard } from './guards/auth.guard';
import { CheckForUserDirective } from './directives/checkForUserDirective';
import { CheckUserRoleDirective } from './directives/checkUserRoleDirective';

import { UsersService, UsersProfileService, JobsService, JobApplicationService, CommentsService } from './services/index';

import { AppComponent } from './app.component';
import { RegistrationComponent, LoginComponent } from './pages/users/index';
import { LoginButtons } from './pages/navbarUI/login-buttons';
import { ProfileButtonsComponent } from './pages/navbarUI/profile-buttons';

import { FreelancersListComponent } from './pages/freelancers-list/freelancers-list.component';
import { EmployersListComponent } from './pages/employers-list/employers-list.component';
import { FreelancerShortComponent } from './pages/freelancers-list/freelancer-short/freelancer-short.component';
import { EmployerShortComponent } from './pages/employers-list/employers-short/employer-short.component';
import { ListJobsComponent } from './jobs-list/job-list.component';
import { HomeComponent } from './home/home.component';
import { JobCreateComponent } from './jobs-create/job-create.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { JobApplicationFormComponent } from './jobs/job-application-form/job-application-form.component';
import { JobFilterPipe } from './custom-pipes/job-filter.pipe';
import { FreelancersFilterPipe } from './custom-pipes/freelancers-filter.pipe';
import { ViewProfileComponent } from './pages/profile-view/profile-view';
import { EmployersFilterPipe } from './custom-pipes/employers-filter.pipe';
import { CommentComponent } from './pages/comment-create/comment-create.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    LoginButtons,
    ProfileButtonsComponent,
    FreelancersListComponent,
    EmployersListComponent,
    FreelancerShortComponent,
    EmployerShortComponent,
    ListJobsComponent,
    HomeComponent,
    JobCreateComponent,
    JobDetailComponent,
    JobApplicationFormComponent,
    ViewProfileComponent,
    JobFilterPipe,
    FreelancersFilterPipe,
    EmployersFilterPipe,
    CheckForUserDirective,
    CheckUserRoleDirective,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    UsersService,
    UsersProfileService,
    JobsService,
    JobApplicationService,
    AuthGuard,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
