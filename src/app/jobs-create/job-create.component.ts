import { Component } from '@angular/core';
import { Job } from '../../models/job-model';

@Component({
    selector: 'app-job-create',
    templateUrl: './job-create.component.html'
})
export class JobCreateComponent {
    title: string;
    description: string;
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
    tag5: string;
    tags:string[]= ['', 'HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'Express', 'C#', 'C++', 'MongoDB', 'SQL', 'MS-SQL Server', 'Android', 'iOS', 'Java']
    inputTags: string[] = [this.tag1, this.tag2, this.tag3, this.tag4, this.tag5]
    jobTags: string[] = [];
    job: Job;

    createJob() {
    for (let i = 0, length = this.inputTags.length; i < length; i += 1) {
        if (this.inputTags[i]) {
            this.jobTags.push(this.inputTags[i]);
        }
    }
    console.log(this.jobTags);
    //this.job = new Job(this.title, this.description, this.jobTags);
    }
}
