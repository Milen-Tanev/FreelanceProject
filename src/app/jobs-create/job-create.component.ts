import { Component } from '@angular/core';

import { Job } from '../../models/job-model';

import {JobsService } from '../services/index';


@Component({
    selector: 'app-job-create',
    templateUrl: './job-create.component.html'
})
export class JobCreateComponent {
    title: string;
    description: string;
    creatorId: string;
    creatorUsername: string;
    status: string;
    authtoken: string;
    applyBeforeDate: Date = new Date();
    tag1: string = '';
    tag2: string = '';
    tag3: string = '';
    tag4: string = '';
    tag5: string = '';
    tags: string[]= ['', 'HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'Express', 'C#', 'C++', 'MongoDB', 'SQL', 'MS-SQL Server', 'Android', 'iOS', 'Java']
    inputTags: string[] = [];
    jobTags: string[];
    job: Job;

    constructor(private jobsService: JobsService) { }


    createJob() {
        this.inputTags.push(this.tag1);
        this.inputTags.push(this.tag2);
        this.inputTags.push(this.tag3);
        this.inputTags.push(this.tag4);
        this.inputTags.push(this.tag5);
        this.jobTags = this.inputTags.filter(tag => tag !== '');
        this.creatorId = sessionStorage.getItem('id');
        this.creatorUsername = sessionStorage.getItem('username');
        this.authtoken = sessionStorage.getItem('authtoken')
        this.status = 'active';
        this.job = new Job(this.title, this.description, this.jobTags, this.creatorId, this.creatorUsername, this.status, this.applyBeforeDate);
        console.log(this.job);
        this.jobsService.createJob(this.job, this.authtoken)
        .subscribe(result => {
            alert(result.status);
        });
        //redirect to jobs history
    }
}
