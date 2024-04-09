import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() deleteNote:  EventEmitter<Note> = new EventEmitter<Note>(); 

  constructor(private noteService: NoteService, private modifyNoteModalService: ModifyNoteModalService ) {}

  onDeleteNote(): void {
    console.log('delete');
    
    this.deleteNote.emit(this.note); // Émet l'événement de suppression avec la note correspondante
  }

  // deleteNote(): void 
  // {
  //   this.noteService.deleteNote(this.note);
  // }

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
