import { Injectable } from '@angular/core'
import { Http, Response, Headers } from '@angular/http'
import {Observable} from 'rxjs/Observable'
import { IJob } from '../../interfaces/IJob'
import 'rxjs/add/operator/map'

@Injectable()
export class JobListService {
    private jobsUrl: string = 'https://baas.kinvey.com/appdata/kid_ryr_EhREx/jobs/'

    constructor(private http: Http) {

    }

    getAllJobs():Observable<IJob[]> {
        let headers = new Headers();
        headers.append('Authorization','Basic YXNkOmFzZA==');
        return this.http.get(this.jobsUrl, {
            headers: headers
        }).map((response:Response) => <IJob[]>response.json());
    }
}