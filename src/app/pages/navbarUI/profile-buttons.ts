import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/index';

@Component ({
    selector: 'profile-info',
    templateUrl: './profile-buttons.html',
    styleUrls: ['./navbar-right.css']
})

export class ProfileButtonsComponent {
  userId: string;
    constructor(private userService: UsersService) { this.userId = sessionStorage.getItem('id'); }
  logout() {
    let authToken = sessionStorage.getItem('authtoken');
    let logout = this.userService.logout(authToken);
    logout.subscribe((result) => {
      let res = result.json();
      if (result.status === 204) {
        sessionStorage.clear();
        alert('Goodbye');
      } else {
        alert('Status: ' + result.status);
      }
    });
  }
}
