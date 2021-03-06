import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { RegistrationComponent, LoginComponent } from './pages/users/index';
import { FreelancersListComponent } from './pages/freelancers-list/freelancers-list.component';
import { EmployersListComponent } from './pages/employers-list/employers-list.component';
import { ListJobsComponent } from './jobs-list/job-list.component';
import { HomeComponent } from './home/home.component';
import { JobCreateComponent } from './jobs-create/job-create.component';
import { JobDetailComponent } from './jobs/job-detail/job-detail.component';
import { ViewProfileComponent } from './pages/profile-view/profile-view';
import { JobApplicationHistoryComponent } from './job-application-history/application-history.component'

const routes: Routes = [
  {
    path: 'freelancers',
    component: FreelancersListComponent
  },
  {
    path: 'employers',
    component: EmployersListComponent
  },
  {
    path: 'user/register',
    component: RegistrationComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/:id',
    component: ViewProfileComponent,
  },
  {
    path: 'jobs',
    component: ListJobsComponent
  },
  {
    path: 'job/:id',
    component: JobDetailComponent,
  },
  {
    path: 'user/:id',
    component: JobDetailComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'create-job',
    component: JobCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile/:id',
    component: ViewProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-applications',
    component: JobApplicationHistoryComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

export const routedComponents = [AppComponent, RegistrationComponent];
