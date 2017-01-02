import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UsersProfileService } from '../../services/index';
//import { FilterByRolePipe } from '../../pipes/filter-by-role.pipe';

import { UserProfile } from '../../../models/user-profile.model';
import { guestUserAuthToken } from '../../../shared/constants';

@Component({
  moduleId: 'module.id',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.css'],
})
export class EmployersListComponent implements OnInit {

  employers: UserProfile[] = [];
  role: string = 'Employer';
  authtoken: string = '';

  constructor(private usersProfileService: UsersProfileService) { }

  private getUsers(authtoken: string): void {
    this.usersProfileService.getAllUsersProfile(authtoken)
    .subscribe((res) => {
      for (let i of res) {
          if (i.role === this.role) {
          this.employers.push(i);
        }

      }
      console.log(res);
      console.log(this.employers);
      console.log(this.employers.length);
    });
  }

  ngOnInit() {
    this.authtoken = sessionStorage.getItem('authtoken');
    if (this.authtoken === null) {
      this.authtoken = guestUserAuthToken;
    }
    this.getUsers(this.authtoken);
  }
}
