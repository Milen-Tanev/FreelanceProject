import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: 'module.id',
  selector: '[app-comment-detail]',
  templateUrl: './comments-detail.html',
  styleUrls: ['./comments-detail.css']
})
export class CommentDetailsComponent{

  constructor() { }

  private init(): void {
  }
@Input('app-comment-detail') comment: any;

}