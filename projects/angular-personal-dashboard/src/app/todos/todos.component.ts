import { Component } from '@angular/core';
//
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,  // for the ngFor directive
    TodoItemComponent
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos()
  }

  toggleCompleted(todo: Todo) {
    this.todoService.updateTodo(todo.id, { completed: !todo.completed })
  }

  onEditClick(todo: Todo) {
    this.router.navigate(['/todos', todo.id])
  }

  onDeleteClick(todo: Todo) {
    this.todoService.deleteTodo(todo.id)
  }

  trackById(index: number, item: Todo) {
    return item.id
  }
}
