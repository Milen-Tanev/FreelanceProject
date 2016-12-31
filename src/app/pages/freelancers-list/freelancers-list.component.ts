import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { UsersProfileService } from '../../services/index';

import { UserProfile } from '../../../models/user-profile.model';
import { guestUserAuthToken } from '../../../shared/constants';

@Component({
  moduleId: 'module.id',
  templateUrl: './freelancers-list.component.html',
  styleUrls: ['./freelancers-list.component.css']
})
export class FreelancersListComponent implements OnInit {

  freelancers: UserProfile[] = [];
  authtoken: string = '';

  constructor(private usersProfileService: UsersProfileService) { }

  private getUsers(authtoken: string): void {
    this.usersProfileService.getAllUsersProfile(authtoken)
    .subscribe((res) => {
      for (let i of res) {
        this.freelancers.push(i);
      }
      console.log(res);
      console.log(this.freelancers);
      console.log(this.freelancers.length);
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
