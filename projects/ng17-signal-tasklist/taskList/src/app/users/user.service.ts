import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, takeUntil, tap } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Inject the HttpClient service
  http = inject(HttpClient);
  userUrl = 'https://jsonplaceholder.typicode.com/users';

  // Retrieve the users from the API using RxJS
  private users$ = this.http.get<User[]>(this.userUrl);

  // Expose the state as a signal
  // NOTE: toSignal creates a readonly signal
  // This example does not need a writable signal
  users = toSignal(this.users$, { initialValue: [] as User[] });
  selectedUserId = signal(0);

  // Set the selected user
  setSelectedUser(id: number) {
    this.selectedUserId.set(id);
  }

  constructor() { }
}
