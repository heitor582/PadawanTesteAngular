import { Component, OnInit , ViewChild } from '@angular/core';
import { CommentsService } from './../../core/services/commentService/comment.service';
import CommentI from '../../core/models/comment.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})

export class CommentsComponent implements OnInit {
  displayedColumns: string[] = ['postId', 'id', 'name' , 'email' , 'body'];
  dataSource: MatTableDataSource<CommentI>;

  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort;
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this._getData();
  }


  _getData(): void {
    this.commentsService.reqComments().subscribe((comments) => {
      this.dataSource = new MatTableDataSource<CommentI>(comments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
