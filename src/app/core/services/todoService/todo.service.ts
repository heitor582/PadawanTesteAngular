import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import TodoI from '../../models/todo.model';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = `${environment.API_SERVER}/todos`;
  constructor(private http: HttpClient) {}
  reqTodos(): Observable<TodoI[]> {
    return this.http.get<TodoI[]>(this.baseUrl);
  }
}
