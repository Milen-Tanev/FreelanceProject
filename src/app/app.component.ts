import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/index';
import { CheckForUserDirective } from './directives/checkForUserDirective';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  CheckForUserDirective;
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
