import { CommentsService } from './../../core/services/commentService/comment.service';
import { Component, OnInit } from '@angular/core';
import CommentI from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: CommentI[];
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.reqComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}
