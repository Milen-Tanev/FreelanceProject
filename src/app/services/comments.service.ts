import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Comment } from '../../models/comment.model';
import { kinveyHeaderKey, kinveyAppDataUrl, kinveyCommentsCollection, kinveyUserAuthorization } from '../../shared/constants';

@Injectable()
export class CommentsService{
    constructor(private http: Http){}

    createComment(authtoken: string, comment: Comment){
        
        let userCredetials = kinveyUserAuthorization + authtoken;
        let addCommentHeaders = new Headers();
        addCommentHeaders.append(kinveyHeaderKey, kinveyUserAuthorization + authtoken);
        return this.http.post(kinveyAppDataUrl + kinveyCommentsCollection , comment, {headers: addCommentHeaders});
    }
}