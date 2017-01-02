import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Comment } from '../../models/comment.model';
import { kinveyHeaderKey, kinveyBasicHeaders, kinveyAppDataUrl, kinveyCommentsCollection } from '../../shared/constants';

let headers = new Headers();
headers.append(kinveyHeaderKey, kinveyBasicHeaders.Authorization);

@Injectable()
export class CommentsService{
    constructor(private http: Http){}

    createComment(authtoken: string, comment: Comment){
        return this.http.post(kinveyAppDataUrl + kinveyCommentsCollection , comment, {headers: headers})
    }

}