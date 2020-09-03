import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import PostsI from 'src/app/core/models/posts.model';
import { PostsService } from './../../core/services/postsService/posts.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['UserId', 'ID', 'Title', 'Body'];
  dataSource: MatTableDataSource<PostsI>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private postsService: PostsService, private route: Router) {}

  ngOnInit(): void {
    this._getData();
  }
  _getData() {
    this.postsService.reqPosts().subscribe((posts) => {
      this.dataSource = new MatTableDataSource<PostsI>(posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  RouteNovoPost() {
    this.route.navigateByUrl('/novoPost');
  }
}
