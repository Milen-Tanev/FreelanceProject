import { Component, OnInit, Input } from '@angular/core';
import {Router } from '@angular/router';

import { JobApplicationService } from '../../services/index';

import { JobApplication } from '../../../models/job-application.model';

@Component({
  moduleId: 'module.id',
  selector: '[app-job-application-form]',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent implements OnInit {
  @Input('app-job-application-form') job: any;
  private jobApplication: JobApplication;
  constructor(private jobsApplicationService: JobApplicationService, private router: Router) { }

  ngOnInit() {
    this.jobApplication = new JobApplication('', '', '', '', '', '', '');
    console.log(this.job);
  }
   createJobApplication() {
      let authtoken = sessionStorage.getItem('authtoken');
        this.jobApplication.jobId = this.job.jobId;
        this.jobApplication.jobTitle = this.job.title;
        this.jobApplication.employerId = this.job.creatorId;
        this.jobApplication.employerUserName = this.job.creatorUsername;
        this.jobApplication.freelancerId = sessionStorage.getItem('id');
        this.jobApplication.freelancerUsername = sessionStorage.getItem('username');

        this.jobsApplicationService.createJobsApplication(this.jobApplication, authtoken)
        .subscribe((res) => {
            alert(res.status);
            console.log(res);
            this.router.navigate(['/home']);
        });
      }
    }
