import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { JobApplication } from '../../models/job-application.model';
import { kinveyKey, kinveySecret, kinveyHeaderKey, kinveyUserAuthorization, kinveyBasicHeaders, guestUserAuthToken, 
    kinveyAppDataUrl, kinveyJobsApplicationsCollection} from '../../shared/constants';


let headers = new Headers();
headers.append(kinveyUserAuthorization, kinveyBasicHeaders.Authorization);

@Injectable()
export class JobApplicationService {

  constructor(private http: Http) { }
  createJobsApplication(jobApplication: JobApplication, authtoken: string) {
    let userCredentials = kinveyUserAuthorization + authtoken;
    let createUserProfileHeaders = new Headers();
    console.log(jobApplication);
    createUserProfileHeaders.append(kinveyHeaderKey, userCredentials );
    return this.http.post(kinveyAppDataUrl + kinveyJobsApplicationsCollection, jobApplication, {headers: createUserProfileHeaders});
  }
  getJobsApplications(jobId: string, authtoken: string) {
    let jobIdCredentials = kinveyUserAuthorization + authtoken;
    let jobHeaders = new Headers();
    jobHeaders.append(kinveyHeaderKey, jobIdCredentials );
    return this.http.get(kinveyAppDataUrl + kinveyJobsApplicationsCollection + '/' + jobId, {headers: jobHeaders})
      .map((res: Response) => {
        return res.json();
      });
  }
}
