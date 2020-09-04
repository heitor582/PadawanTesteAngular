import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TodoService } from '../../core/services/todoService/todo.service';
import TodoI from '../../core/models/todo.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource: MatTableDataSource<TodoI>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this._getData();
  }
  _getData(filtro?: string): void {
    this.todoService.reqTodos(filtro).subscribe((todos) => {
      this.dataSource = new MatTableDataSource<TodoI>(todos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filtro(e: any) {
    this._getData(e.target.value);
  }
}
