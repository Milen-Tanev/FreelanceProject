import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserProfile } from '../../models/user-profile.model';
import { Job } from '../../models/job-model';
import {} from '../../models/job-model';
import { kinveyKey, kinveySecret, kinveyHeaderKey, kinveyUserAuthorization, kinveyBasicHeaders, guestUserAuthToken, 
    kinveyAppDataUrl, kinveyUsersProfileColleciton, kinveyJobsCollection} from '../../shared/constants';


let headers = new Headers();
headers.append(kinveyUserAuthorization, kinveyBasicHeaders.Authorization);

@Injectable()
export class JobsService {

  constructor(private http: Http) { }

  createJob(job: Job, authtoken: string) {
    let userCredentials = kinveyUserAuthorization + authtoken;
    let createUserProfileHeaders = new Headers();
    createUserProfileHeaders.append(kinveyHeaderKey, userCredentials);
    console.log(createUserProfileHeaders);
    return this.http.post(kinveyAppDataUrl + kinveyJobsCollection, job, { headers: createUserProfileHeaders });
  }

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
