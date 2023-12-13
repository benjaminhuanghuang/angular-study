import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  // Inject the UserService (new in v14)
  userService = inject(UserService);

  // Variables that don't change value
  pageTitle = 'User List';

  // Expose the state as signals
  users = this.userService.users;
  selectedUserId = this.userService.selectedUserId;

  // Set the selected user
  onSelected(userId: number): void {
    this.selectedUserId.set(userId);
  }
}
