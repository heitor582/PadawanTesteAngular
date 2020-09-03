import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PostsI from '../../models/posts.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl = `${environment.API_SERVER}/posts`;
  constructor(private http: HttpClient) {}
  reqPosts(): Observable<PostsI[]> {
    return this.http.get<PostsI[]>(this.baseUrl);
  }
  cadastrarPost(newPost: PostsI): Observable<PostsI> {
    return this.http.post<PostsI>(this.baseUrl, newPost);
  }
}
