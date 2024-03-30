import { Component, EventEmitter, Input, Output } from '@angular/core';
//
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  @Input() todo: Todo = {} as Todo;

  @Output() editClick: EventEmitter<void> = new EventEmitter()
  @Output() deleteClick: EventEmitter<void> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onEditClick() {
    this.editClick.emit()
  }

  onDeleteClick() {
    this.deleteClick.emit()
  }
}
