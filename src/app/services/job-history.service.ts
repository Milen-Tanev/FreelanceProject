import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'

@Injectable()
export class JobHistoryService {
    private url: string = 'https://baas.kinvey.com/appdata/kid_ryr_EhREx/jobsApplications/'
    private token = sessionStorage.getItem('authtoken');
    private headers: Headers = new Headers();
    constructor(private http: Http) {

    }

    getJobApplications() {
        this.headers.append('Authorization', 'Kinvey ' + this.token);
        return this.http.get(this.url, { headers: this.headers }).map((res: Response) => {
            return res.json();
        })
    }
}