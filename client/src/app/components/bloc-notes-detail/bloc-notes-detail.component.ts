import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from '../note/note.component';
import { ModifyNoteModalComponent } from '../modify-note-modal/modify-note-modal.component';
import { ModifyNoteModalService } from '../../services/modify-note-modal.service';



@Component({
  selector: 'app-bloc-notes-detail',
  standalone: true,
  imports: [NoteComponent, CommonModule, FormsModule, ModifyNoteModalComponent],
  templateUrl: './bloc-notes-detail.component.html',
  styleUrl: './bloc-notes-detail.component.css'
})
export class BlocNotesDetailComponent {
  notes: Note[] = [];
  noteTitle: string = '';
  noteContent: string = '';
  noteColor: string = 'bg-red-500'; // Couleur par défaut
  blocNoteId: number  = -1;
  showModifyNoteModal: boolean = false;

  constructor(private noteService: NoteService, private router: Router, private route: ActivatedRoute, private modifyNoteModalService: ModifyNoteModalService) {}


  ngOnInit(): void
  {
    // Gestion de l'erreur Object is possibly 'null
    const idString: string | null = this.route.snapshot.paramMap.get('id');

    this.modifyNoteModalService.openModal$.subscribe((isOpen: boolean) => {
      this.showModifyNoteModal = isOpen;
    });
    
    this.blocNoteId = idString ? parseInt(idString, 10) : -1;
    
    if (this.blocNoteId !== -1) 
    {
      // this.notes = this.noteService.getNotes(this.blocNoteId);
      // this.notes = this.noteService.getAllNotes().filter(note => note.blocNoteId === this.blocNoteId)
      this.noteService.refreshNotes(this.blocNoteId);
      this.noteService.getNotes(this.blocNoteId).subscribe((notes: Note[]) => {
        this.notes = notes;
      });

    }

  }

  createNote()
  {
    const newNote: Note = {
      title: this.noteTitle,
      content: this.noteContent,
      id: this.noteService.getIdNumer(),
      color: this.noteColor,
      blocNoteId: this.blocNoteId
    };



    this.noteService.increaseId();
    this.noteService.addNote(newNote);
    this.noteTitle = '';
    this.noteContent = '';
    this.noteColor = 'bg-red-500';

    console.log("Notes", this.notes, this.noteService.getAllNotes(), this.noteService.getNotes(this.blocNoteId));
    // this.notes = this.noteService.getNotes(this.blocNoteId);
    
  }

  deleteNote(note: Note)
  {
    this.noteService.deleteNote(note);
    // this.notes = this.noteService.getNotes(this.blocNoteId);
    
  }

  returnToBlocNoteCreation()
  {
    this.router.navigate(['/bloc-note'])
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
