import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserProfile } from '../../models/user-profile.model';
import { kinveyKey, kinveySecret, kinveyHeaderKey, kinveyUserAuthorization, kinveyBasicHeaders, guestUserAuthToken, 
    kinveyAppDataUrl, kinveyUsersProfileColleciton, kinveyJobsCollection} from '../../shared/constants';


let headers = new Headers();
headers.append(kinveyUserAuthorization, kinveyBasicHeaders.Authorization);

@Injectable()
export class JobsService {

  constructor(private http: Http) { }

  getJobById(jobId: string, authtoken: string) {
    let jobIdCredentials = kinveyUserAuthorization + authtoken;
    let jobHeaders = new Headers();
    jobHeaders.append(kinveyHeaderKey, jobIdCredentials );
    return this.http.get(kinveyAppDataUrl + kinveyJobsCollection + '/' + jobId, {headers: jobHeaders})
      .map((res: Response) => {
        return res.json();
      });
  }
}
