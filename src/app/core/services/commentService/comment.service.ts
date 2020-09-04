import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CommentI from '../../models/comment.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  baseUrl = `${environment.API_SERVER}/comments`;
  constructor(private http: HttpClient) {}
  reqComments(filtro?:string): Observable<CommentI[]> {
    if(filtro === undefined) return this.http.get<CommentI[]>(this.baseUrl);
    return this.http.get<CommentI[]>(this.baseUrl + `?${filtro}`);
  }
}
