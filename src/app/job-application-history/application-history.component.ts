import { Component, OnInit } from '@angular/core';
import { JobHistoryService } from '../services/job-history.service'

@Component({
    selector: 'application-history',
    templateUrl: './application-history.component.html'
})
export class JobApplicationHistoryComponent implements OnInit {
    jobApplications: any[];

    constructor(private historyService: JobHistoryService) {

    }

    ngOnInit() {
        this.historyService.getJobApplications().
            subscribe(jobApplications => {
                this.jobApplications = jobApplications;
                console.log(this.jobApplications);
            }, error => console.log(error));
    }
}