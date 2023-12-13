import { DestroyRef, Injectable, computed, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap, tap } from 'rxjs';
import { ToDo } from './todo';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Inject the HttpClient service
  http = inject(HttpClient);
  userService = inject(UserService);
  todoUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';

  // Create an Observable from the selectedUserId signal
  // React to emissions, piping the userId through an Observable pipeline
  // Use switchMap to get the data
  // Use toSignal to automatically subscribe and unsubscribe
  userTasks = signal([] as ToDo[]);
  private userTasks$ = toObservable(this.userService.selectedUserId).pipe(
    switchMap(userId => this.http.get<ToDo[]>(this.todoUrl + userId).pipe(
      tap(tasks => this.userTasks.set(tasks))
    )),
    catchError(() => of([] as ToDo[])) //  on any error, just return an empty array
  );


  // Mark the task completed
  markComplete(task: ToDo) {
    // this userTasks signal should be a writable signal
    this.userTasks.update(tasks => tasks.map(t =>
      t.id === task.id ? { ...t, completed: true } : t));
  }
}
