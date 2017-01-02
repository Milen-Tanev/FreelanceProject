import { Component, OnInit } from '@angular/core';

import { Comment } from '../../../models/comment.model'
import { CommentsService } from '../../services/index'

@Component ({
    selector: 'createComment',
    templateUrl: './comment-create.component.html',
    styleUrls: ['']
})

export class CommentComponent implements OnInit {
    private authToken: string;
    private senderId: string;
    private addresseeId: string;
    private content: string;

    constructor(private commentsService: CommentsService){ }

    ngOnInit(){
        this.senderId='';
        this.addresseeId = '';
        this.content = '';
    }
    createComment(){
        this.senderId
    }

}