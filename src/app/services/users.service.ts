import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../../models/user.model';
import { UserProfile } from '../../models/user-profile.model';
import { kinveyKey, kinveySecret, kinveyHeaderKey, kinveyUserAuthorization, kinveyBasicHeaders, 
          guestUserAuthToken, kinveyAppDataUrl, kinveyUsersProfileColleciton} from '../../shared/constants';


let headers = new Headers();
headers.append(kinveyHeaderKey, kinveyBasicHeaders.Authorization);

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  createUser(user: User) {
    // base auth
    console.log(headers);
    return this.http.post('https://baas.kinvey.com/user/kid_ryr_EhREx', user, { headers: headers });
  }
  createUserProfile(userProfile: UserProfile, authtoken: string) {
    let userCredentials = kinveyUserAuthorization + authtoken;
    let createUserProfileHeaders = new Headers();
    createUserProfileHeaders.append(kinveyHeaderKey, userCredentials );
    return this.http.post(kinveyAppDataUrl + kinveyUsersProfileColleciton, userProfile, {headers: createUserProfileHeaders});
  }

  loginUser(user: {username: string, password: string}) {
    return this.http.post('https://baas.kinvey.com/user/kid_ryr_EhREx/login', user , { headers: headers });
  }

  logout(authToken: string) {
    let kinveyLogoutHeaders = 'Kinvey ' + authToken;
    console.log(kinveyLogoutHeaders);
    let logoutHeaders = new Headers();
    logoutHeaders.append('Authorization', kinveyLogoutHeaders);
    console.log(logoutHeaders);
    return this.http.post('https://baas.kinvey.com/user/kid_ryr_EhREx/_logout',{}, { headers: logoutHeaders });
  }
}
