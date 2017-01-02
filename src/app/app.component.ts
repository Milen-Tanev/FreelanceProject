import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CheckForUserDirective } from './directives/checkForUserDirective';
import { CheckUserRoleDirective } from './directives/checkUserRoleDirective';
import { UsersService } from './services/index';

import {JobListService} from './jobs-list/job-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  providers: [JobListService]
})
export class AppComponent {
  CheckForUserDirective;
  CheckUserRoleDirective;
  private filterFreelancers: string;
  private username: string = sessionStorage.getItem('username') || 'Account';
  loginAuth(): boolean {
    let authToken = sessionStorage.getItem('authtoken');
    if (authToken === null) {
      return true;
    } else {
      return false;
    }
  }
  profileAuth(): boolean {
    let authToken = sessionStorage.getItem('authtoken');
    if (authToken === null) {
      return false;
    } else {
      return true;
    }
  }
}
