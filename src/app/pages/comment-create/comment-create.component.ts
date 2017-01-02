import { Component, Input, OnInit } from '@angular/core';

import { Comment } from '../../../models/comment.model'
import { CommentsService } from '../../services/index'

@Component({
    moduleId: 'module.id',
    selector: '[app-create-comment]',
    templateUrl: './comment-create.component.html',
    styleUrls: []
})

export class CommentComponent implements OnInit {
    @Input('app-create-comment') userProfile: any;
    private content;
    private senderId: string;
    private addresseeId: string;
    private comment: Comment;

    constructor(private commentsService: CommentsService) { }

    ngOnInit() {
        this.senderId = '';
        this.addresseeId = '';
        this.content = '';
        this.comment = new Comment('', '', '');
    }
    createComment() {
        console.log('comment');
        let authtoken = sessionStorage.getItem('authtoken');
        this.senderId = sessionStorage.getItem('id');
        this.comment = new Comment(this.senderId, this.addresseeId, this.content);
        this.commentsService.createComment(authtoken, this.comment)
            .subscribe(res => console.log(res));
    }
    profileAuth(): boolean {
        let authToken = sessionStorage.getItem('authtoken');
        if (authToken === null) {
            return false;
        }
    }
}
