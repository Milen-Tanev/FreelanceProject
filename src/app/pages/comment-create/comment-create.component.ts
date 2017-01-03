import { Component, Input, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Comment } from '../../../models/comment.model';
import { CommentsService } from '../../services/index';

@Component({
    moduleId: 'module.id',
    selector: '[app-create-comment]',
    templateUrl: './comment-create.component.html',
    styleUrls: ['./comment-create.component.css']
})

export class CommentComponent implements OnInit {
    @Input('app-create-comment') userProfile: any;
    private content;
    private senderId: string;
    private addresseeId: string;
    private sender: string;
    private comment: Comment;

constructor(private commentsService: CommentsService, private router: Router, private activatedRoute: ActivatedRoute ) { }

    ngOnInit() {
        this.senderId = '';
        this.addresseeId = '';
        this.content = '';
        this.sender = '';
        this.comment = new Comment('', '', '', '');
    }
    createComment() {
        console.log('comment');
        let authtoken = sessionStorage.getItem('authtoken');
        this.senderId = sessionStorage.getItem('id');
        this.sender = sessionStorage.getItem('username');
        this.addresseeId = this.activatedRoute.snapshot.params['id'];
        this.comment = new Comment(this.senderId, this.addresseeId, this.content, this.sender);
        this.commentsService.createComment(authtoken, this.comment)
            .subscribe(() => this.router.navigate(['/home']));
    }
    profileAuth(): boolean {
        let authToken = sessionStorage.getItem('authtoken');
        if (authToken === null) {
            return false;
        }
    }
}
