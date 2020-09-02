import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import PostsI from '../../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  reqPosts(): Observable<PostsI[]> {
    return this.http.get<PostsI[]>(this.baseUrl);
  }
}
