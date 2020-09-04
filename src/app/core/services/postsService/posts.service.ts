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
  reqPosts(filtro?:string): Observable<PostsI[]> {
    if(filtro === undefined) return this.http.get<PostsI[]>(this.baseUrl);
    return this.http.get<PostsI[]>(this.baseUrl + `?${filtro}`);
  }
  cadastrarPost(newPost: PostsI): Observable<PostsI> {
    return this.http.post<PostsI>(this.baseUrl, newPost);
  }
}
