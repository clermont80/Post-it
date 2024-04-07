// bloc-note.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlocNoteService {
  private notes: BlocNote[] = [];
  private idNumber: number = 0;

  constructor() { }

  getNotes(): BlocNote[] {
    return this.notes;
  }

  getIdNumer(): number {
    return this.idNumber;
  }

  increaseId(): void {
    this.idNumber++;
  }

  addNote(note: BlocNote): void {
    this.notes.push(note);
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
  }
}

interface BlocNote {
  id: number;
  name: string;
  color: string;
}
