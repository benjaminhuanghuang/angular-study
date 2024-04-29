import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent implements OnInit{
  showValidationErrors: boolean = false;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true

    const todo = new Todo(form.value.text)
    this.todoService.addTodo(todo)
    this.router.navigateByUrl('/todos')

    this.notificationService.show('Todo created!')
  }
}
