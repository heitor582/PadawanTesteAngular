import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import PostsI from 'src/app/core/models/posts.model';
import { PostsService } from './../../core/services/postsService/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: PostsI[];
  constructor(private postsService: PostsService, private route: Router) {}

  ngOnInit(): void {
    this._getData();
  }
  _getData() {
    this.postsService.reqPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
  RouteNovoPost() {
    this.route.navigateByUrl('/novoPost');
  }
}
