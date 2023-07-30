import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.css']
})
export class DeletedTodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  public ngOnInit(): void {
    this.getDeletedTodos();
  }
  getDeletedTodos() {
    this.todoService.getAllDeletedTodos().subscribe((todos: Todo[]) => {
      this.todos = todos;
    });

  }
  undoDeletedTodo(id: string) {
    this.todoService.undoDeletedTodo(id).subscribe((todo: Todo) => {
      this.getDeletedTodos();
    });
  }
}
