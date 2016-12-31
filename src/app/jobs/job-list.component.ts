import { Component,OnInit } from '@angular/core';
import { IJob } from '../../interfaces/IJob'
import { JobListService } from './job-list.service'

@Component({
    selector: 'list-jobs',
    templateUrl: ''
})
export class ListJobsComponent implements OnInit {
    jobs: IJob[]

    constructor(private jobService: JobListService) {
    }

    ngOnInit() {
        this.jobService.getAllJobs()
            .subscribe(
                jobs => this.jobs=jobs,
                error => console.log('error')
            )
    }
}