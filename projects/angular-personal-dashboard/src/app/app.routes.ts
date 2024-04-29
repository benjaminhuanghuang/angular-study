import { Routes } from '@angular/router';
//
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './todos/todos.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

export const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  // { path: 'bookmarks/add', component: AddBookmarkComponent },
  // { path: 'bookmarks/manage', component: ManageBookmarksComponent, children: [
  //   { path: ':id', component: EditBookmarkComponent }
  // ] },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent },
  // { path: 'todos/:id', component: EditTodoComponent },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent }
];
