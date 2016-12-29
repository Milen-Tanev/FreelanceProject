import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from './services/index';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
    private username: string = sessionStorage.getItem('username') || 'Account';
    checkForUser():boolean {
    let authToken = sessionStorage.getItem('authtoken');
    if(authToken){
      return true;
    } else {
      return false;
    }
  }
}
