import {Component} from '@angular/core';

@Component({
    selector:'job-create',
    template:`
    <h1>Create a job</h1>
    <label for="title">Title:</label>
    <input type="text" id="title>
    <label for="description">Description</label>
    <input type="text" id="description">
    <label>Requirements:</label>
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">`
}) 
export class JobCreate {

}