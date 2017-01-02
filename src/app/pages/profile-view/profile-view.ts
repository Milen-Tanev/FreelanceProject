import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersProfileService } from '../../services/index';
import { UserProfile } from '../../../models/user-profile.model';

import { guestUserAuthToken }from '../../../shared/constants';

@Component({
    moduleId: 'module.id',
    templateUrl: './profile-view.html',
    styleUrls: ['./profile-view.css']
})

export class ViewProfileComponent implements OnInit {
    userProfile: UserProfile;
    authToken: string;
    userId: string;

    constructor(private activatedRoute: ActivatedRoute, private usersPorfileService: UsersProfileService) { this.authToken = guestUserAuthToken; }

    ngOnInit() {
        this.userProfile = new UserProfile('', '', '', '', '', '', '', '');
        this.authToken = guestUserAuthToken;
        this.viewProfileById();
    }

    profileAuth(): boolean {
        let authToken = sessionStorage.getItem('authtoken');
        if (authToken === null) {
            return false;
        } else {
            return true;
        }
    }

    viewProfileById() {
        if(sessionStorage.getItem('id')) {
            this.authToken = sessionStorage.getItem('authtoken');
        }
        this.userId = this.activatedRoute.snapshot.params['id'];
        this.usersPorfileService.getUserById(this.authToken, this.userId)
            .subscribe(result => {
                console.log(result);
                this.userProfile.username = result[0].username;
                this.userProfile.firstName = result[0].firstName;
                this.userProfile.lastName = result[0].lastName;
                this.userProfile.email = result[0].email;
                this.userProfile.role = result[0].role;
                this.userProfile.description = result[0].description;
                this.userProfile.companyName = result[0].companyName;
                this.userProfile.country = result[0].country;
                console.log(this.userProfile);
            });
  }
}
