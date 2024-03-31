import { Component } from '@angular/core';
import { Note } from '../shared/note.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss'
})
export class EditNoteComponent {
  note?: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router,
    private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id') || '';
      this.note = this.noteService.getNote(idParam)
    })
  }

  onFormSubmit(form: NgForm) {
    if(this.note == null) return;

    this.noteService.updateNote(this.note.id, form.value)
    this.router.navigateByUrl("/notes")

    this.notificationService.show('Note updated!')
  }

  deleteNote() {
    if(this.note == null) return;

    this.noteService.deleteNote(this.note.id)
    this.router.navigateByUrl("/notes")

    this.notificationService.show('Note deleted')
  }
}
