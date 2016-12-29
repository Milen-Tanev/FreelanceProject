import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { RegistrationComponent, LoginComponent } from './pages/users/index';

const routes: Routes = [
  {
    path: 'user/register',
    component: RegistrationComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/profile',
    component: RegistrationComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

export const routedComponents = [AppComponent, RegistrationComponent];
