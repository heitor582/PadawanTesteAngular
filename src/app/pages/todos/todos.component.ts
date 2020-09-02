import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../core/services/todoService/todo.service';
import TodoI from '../../core/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: TodoI[];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.reqTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
