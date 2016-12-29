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
  constructor(private userService: UsersService) { }
  logout() {
    console.log('logout works');
    let authToken = sessionStorage.getItem('authtoken');
    let logout = this.userService.logout(authToken);
    logout.subscribe((result) => {
      let res = result.json();
      console.log(res);

      if (result.status === 204) {
        sessionStorage.clear();
        alert('Status: ' + result.status);
      } else {
        alert('Status: ' + result.status);
      }
    });
  }
}
