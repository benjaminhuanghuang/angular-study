import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent implements OnInit {
  showValidationErrors: boolean = false;

  constructor(
    private noteService: NoteService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    console.log(form)

    if (form.invalid) return this.showValidationErrors = true

    const note = new Note(form.value.title, form.value.content)

    this.noteService.addNote(note)
    this.router.navigateByUrl("/notes")
    this.notificationService.show('Created Note')
    return;
  }
}
