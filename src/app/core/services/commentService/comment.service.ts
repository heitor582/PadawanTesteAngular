import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CommentI from '../../models/comment.model';
@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  baseUrl = 'http://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}
  reqComments(): Observable<CommentI[]> {
    return this.http.get<CommentI[]>(this.baseUrl);
  }
}
