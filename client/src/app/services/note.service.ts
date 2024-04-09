import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private noteId: number = 0;


  constructor() { }

  getNotes(id: number): Note[]  
  {
    console.log(this.notes.filter(note => note.blocNoteId === id));
    return this.notes.filter(note => note.blocNoteId === id);
  }



  getAllNotes()
  {
    return this.notes;
  }
  

  getNoteById(index: number): Note | undefined
  {
    return this.notes.find(note => note.id === index);
  }

  getIdNumer(): number {
    return this.noteId;
  }

  increaseId(): void {
    this.noteId++;
  }

  addNote(note: Note): void {
    this.notes.push(note);
    console.log(this.notes);
    
  }

  deleteNote(note: Note): void {
    const index = this.notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
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