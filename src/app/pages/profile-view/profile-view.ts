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
            console.log(result);
            alert('Status: ' + result.status);
            // if (result.status === 201) {
            //     this.userProfile.username = this.model.username;
            //     this.userProfile.firstName = this.model.firstName;
            //     this.userProfile.lastName = this.model.lastName;
            //     this.userProfile.email = this.model.email;
            //     this.userProfile.role = this.model.role;
            //     this.userProfile.description = '';
            //     this.userProfile.companyName = this.model.companyName;
            //     this.userProfile.country = this.model.country;
            //     console.log(this.userProfile);
            // }
    });
  }
}