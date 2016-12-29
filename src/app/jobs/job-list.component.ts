import {Component} from '@angular/core';
import {IJob} from '../../interfaces/IJob'

@Component({
    selector:'list-jobs',
    template:`
    <h1>Available jobs:</h1>
    <div *ngFor='let job of jobs>
    <h2>{{job.title}}</h2>
    <p>{{job.description}}</p>
    <ul *ngFor=let requirement of job.requirements>
    <li>{{requirement}}</li>
    </ul>
    `
})
export class ListJobsComponent {
    jobs:IJob[]
}