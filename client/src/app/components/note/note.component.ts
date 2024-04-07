import { Component, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ModifyNoteModalComponent } from '../modify-note-modal/modify-note-modal.component';
import { ModifyNoteModalService } from '../../services/modify-note-modal.service';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note!: Note;

  constructor(private noteService: NoteService, private modifyNoteModalService: ModifyNoteModalService ) {}


  deleteNote(): void 
  {
    this.noteService.deleteNote(this.note);
  }

  editNote(): void
  {
    this.modifyNoteModalService.openModal(this.note);
  }
}

interface Note
{
  id:number;
  blocNoteId:number;
  title: string;
  content: string;
  color: string;
}
