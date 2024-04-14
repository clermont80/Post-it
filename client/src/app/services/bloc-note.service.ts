// bloc-note.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocNoteService 
{
  private notesSubject: BehaviorSubject<BlocNote[]> = new BehaviorSubject<BlocNote[]>([]);
  public notes$ = this.notesSubject.asObservable();

  private idNumber: number = 0;

  constructor(private httpClient: HttpClient) {
    this.refreshBlocNotes();
  }

  refreshBlocNotes() {
    this.httpClient.get("/api/bloc-notes").subscribe((notes: any) => {
      console.log(notes);
      this.notesSubject.next(notes);
    });
  }

  getNotes(): Observable<BlocNote[]> {
    return this.notes$;
  }

  getIdNumber(): number {
    return this.idNumber;
  }

  increaseId(): void {
    this.idNumber++;
  }

  addNote(note: BlocNote): void {
    this.httpClient.post("/api/bloc-notes", note).subscribe(() => {
      this.refreshBlocNotes();
    });
  }

  deleteNote(index: number): void {
    // Supprimez la note du tableau local
    const notes = this.notesSubject.getValue();
    const note = this.notesSubject.getValue()[index];
    notes.splice(index, 1);
    this.notesSubject.next(notes);

    // console.log("Note to delete", note.id);
    
    this.httpClient.delete(`/api/bloc-notes/${note.id}`).subscribe(() => {
      this.refreshBlocNotes();
    });

    this.httpClient.delete(`/api/notes/blocNote/${note.id}`).subscribe(() => {
      this.refreshBlocNotes();
    });


  }
}

interface BlocNote {
  id: number;
  name: string;
  color: string;
}
