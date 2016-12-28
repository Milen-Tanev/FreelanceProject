import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/users/registration/registration.component';

const routes: Routes = [
  {
    path: 'user/register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }

export const routedComponents = [AppComponent, RegistrationComponent];
