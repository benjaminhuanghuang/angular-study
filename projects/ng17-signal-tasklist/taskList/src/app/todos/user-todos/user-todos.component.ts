import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { ToDo } from '../todo';

@Component({
  selector: 'app-user-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-todos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserTodosComponent {
  // Inject the UserService
  todoService = inject(TodoService);

  // Variables that don't change value

  // Expose the state as signals
  userTasks = this.todoService.userTasks;
  completedCount = computed(() => this.userTasks().filter(t => t.completed).length);
  pageTitle = computed(() => `User tasks - ${this.completedCount()} completed`);

  // Mark as completed
  markComplete(todo: ToDo): void {
    this.todoService.markComplete(todo);
  }
}
