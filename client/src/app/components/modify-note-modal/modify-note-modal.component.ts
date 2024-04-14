import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';
import { ModifyNoteModalService } from '../../services/modify-note-modal.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modify-note-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modify-note-modal.component.html',
  styleUrl: './modify-note-modal.component.css'
})
export class ModifyNoteModalComponent {

  @Input() note!: Note;
  currentNote: Note | null = null;
  

  constructor(private noteService: NoteService, private modifyNoteModalService: ModifyNoteModalService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    // Initialiser la note actuelle à partir du service
    this.modifyNoteModalService.currentNote$.subscribe((currentNote: Note | null) => {
      this.currentNote = currentNote;
    });
  }


  // Ajouter une fonction pour mettre à jour la note
  updateNote(): void {
    // Vérifier si la note actuelle est définie avant de l'utiliser
    console.log("Update");
    
    if (this.currentNote) 
    {
      // Mettre à jour la note ici
      this.httpClient.put(`/api/notes`, this.currentNote).subscribe(() => {
        // this.noteService.refreshNotes();
      });
    }
    this.modifyNoteModalService.closeModal()
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