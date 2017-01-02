import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { JobsService } from '../../services/index';
import {IJob} from '../../../interfaces/IJob';
import { guestUserAuthToken } from '../../../shared/constants';

@Component({
  moduleId: 'module.id',
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: any =  {'jobId': '', 'title': '', 'description': '', 'tags': '', 'creatorUsername': '', 'creatorId': '' };
  jobId: string = '';
  userRole: string = '';
  authtoken: string = '';
  constructor(private activatedRoute: ActivatedRoute, private JobsService: JobsService) { }

  private init(): void {
    this.JobsService.getJobById(this.jobId, this.authtoken)
      .subscribe((res) => {
        this.job.title = res.title;
        this.job.description = res.description;
        this.job.tags = res.tags;
        this.job.jobId = this.jobId;
        this.job.creatorId = res._acl.creator;
        this.job.creatorUsername = res.creatorUsername;
    });
  }

  ngOnInit() {
    this.jobId = this.activatedRoute.snapshot.params['id'];
    this.userRole = sessionStorage.getItem('role');
    this.authtoken = sessionStorage.getItem('authtoken');
    if (this.authtoken === null) {
      this.authtoken = guestUserAuthToken;
    }
    this.init();
    console.log(this.job);
  }

  profileAuth(): boolean {
    let authToken = sessionStorage.getItem('authtoken');
    if (authToken === null) {
      return false;
    } else {
      return true;
    }
  }
}
