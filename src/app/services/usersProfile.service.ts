import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserProfile } from '../../models/user-profile.model';
import {
  kinveyKey, kinveySecret, kinveyHeaderKey, kinveyUserAuthorization, kinveyBasicHeaders,
  guestUserAuthToken, kinveyAppDataUrl, kinveyUsersProfileColleciton, creatorIdQuery
} from '../../shared/constants';


let headers = new Headers();
headers.append(kinveyUserAuthorization, kinveyBasicHeaders.Authorization);

@Injectable()
export class UsersProfileService {

  constructor(private http: Http) { }

  createUserProfile(userProfile: UserProfile, authtoken: string) {
    let userCredentials = kinveyUserAuthorization + authtoken;
    let createUserProfileHeaders = new Headers();
    createUserProfileHeaders.append(kinveyHeaderKey, userCredentials);
    console.log(createUserProfileHeaders);
    return this.http.post(kinveyAppDataUrl + kinveyUsersProfileColleciton, userProfile, { headers: createUserProfileHeaders });
  }

  getAllUsersProfile(authtoken: string) {
    let userCredentials = kinveyUserAuthorization + authtoken;
    let userProfileHeaders = new Headers();
    userProfileHeaders.append(kinveyHeaderKey, userCredentials);
    return this.http.get(kinveyAppDataUrl + kinveyUsersProfileColleciton, { headers: userProfileHeaders })
      .map((res: Response) => {
        return res.json();
      });
  }
  getUserById(authtoken: string, userId: string) {
    let userCredentials = kinveyUserAuthorization + authtoken;
    let userProfileHeaders = new Headers();
    userProfileHeaders.append(kinveyHeaderKey, userCredentials);
  return this.http.get(kinveyAppDataUrl + kinveyUsersProfileColleciton +`/?query={"_acl.creator":"${userId}"}`, { headers: userProfileHeaders })
      .map((res: Response) => {
        return res.json();
      });
  }
}
