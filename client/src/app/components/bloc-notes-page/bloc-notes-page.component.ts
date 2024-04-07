import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlocNoteService } from '../../services/bloc-note.service';
import { BlocNoteComponent } from '../bloc-notes/bloc-notes.component';



@Component({
  selector: 'app-bloc-notes-page',
  standalone: true,
  imports: [FormsModule, CommonModule, BlocNoteComponent],
  templateUrl: './bloc-notes-page.component.html',
  styleUrl: './bloc-notes-page.component.css'
})

export class BlocNotePageComponent implements OnInit {
  notes: BlocNote[] = [];
  noteName: string = '';
  noteColor: string = 'bg-red-500'; // Couleur par défaut

  constructor(private blocNoteService: BlocNoteService) { }

  ngOnInit(): void {
    this.notes = this.blocNoteService.getNotes();
  }

  createNote() {
    const newNote: BlocNote = {
      name: this.noteName,
      id: this.blocNoteService.getIdNumer(),
      color: this.noteColor
    };
    this.blocNoteService.increaseId();
    this.blocNoteService.addNote(newNote);
    this.noteName = ''; // Réinitialiser le champ du nom du bloc-note
  }

  deleteNote(index: number): void {
    this.blocNoteService.deleteNote(index);
  }

}

interface BlocNote
{
  id: number;
  name: string;
  color: string;
}
