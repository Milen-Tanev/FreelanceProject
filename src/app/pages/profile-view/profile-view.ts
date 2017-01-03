import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersProfileService, CommentsService } from '../../services/index';
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
    isNotChecked: boolean;
    comments: Comment[];

    constructor(private activatedRoute: ActivatedRoute, private usersPorfileService: UsersProfileService, private commentService: CommentsService) { this.authToken = guestUserAuthToken; }

    ngOnInit() {
        this.userProfile = new UserProfile('', '', '', '', '', '', '', '');
        this.comments = [];
        this.authToken = guestUserAuthToken;
        this.viewProfileById();
        this.getCommentsForUser();
        this.isNotChecked = true;
    }

    profileAuth(): boolean {
        let authToken = sessionStorage.getItem('authtoken');
        if (authToken === null) {
            return false;
        } else {
            return true;
        }
    }

    checkForRole(): boolean {
        let role = sessionStorage.getItem('role');
        if (role === 'Freelancer') {
            return true;
        } else {
            return false;
        }
    }

    checkForClickedButton() {
        if (this.isNotChecked) {
            return false;
        } else {
            return true;
        }
    }

    checkIfUserProfile() {
        if (sessionStorage.getItem('id') === this.userId) {
            return true;
        } else {
            return false;
        }
    }

    setIsNotChecked() {
        this.isNotChecked = !this.isNotChecked;
    }

    viewProfileById() {
        if (sessionStorage.getItem('id')) {
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
    getCommentsForUser() {
        this.commentService.getAllCommentsForUser(this.userId, this.authToken)
        .subscribe(res => {
        console.log("Result");
        console.log(res);
        for (let i of res) {
          this.comments.push(i);
        }
    });
    }
}
