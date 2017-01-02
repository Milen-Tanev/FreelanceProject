import { Component, OnInit } from '@angular/core';
import { UsersProfileService } from '../../services/index';
import { UserProfile } from '../../../models/user-profile.model';

@Component({
    moduleId: 'module.id',
    templateUrl: './profile-view.html',
    styleUrls: ['./profile-view.css']
})

export class ViewProfile implements OnInit{
    private userProfile: UserProfile;
    private authToken;
    private userId;

    constructor(private usersPorfileService: UsersProfileService){}

    ngOnInit() {
        this.userProfile = new UserProfile('', '', '', '', '', '', '', '');
        this.authToken = '';
        this.userId = '';
        this.viewProfileById();
    }

    viewProfileById() {
        this.authToken = sessionStorage.getItem('authtoken');
        this.userId = sessionStorage.getItem('id');
        this.usersPorfileService.getUserById(this.authToken, this.userId)
            .subscribe(result => {
                this.userProfile.username = result[0].username;
                this.userProfile.firstName = result[0].firstName;
                this.userProfile.lastName = result[0].lastName;
                this.userProfile.email = result[0].email;
                this.userProfile.role = result[0].role;
                this.userProfile.description = result[0].description;
                this.userProfile.companyName = result[0].companyName;
                this.userProfile.country = result[0].country;
                console.log(this.userProfile)
            });
  }
}