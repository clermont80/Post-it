import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService 
{
  private notesSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
  public notes$ = this.notesSubject.asObservable();

  private noteId: number = 0;

  constructor(private httpClient: HttpClient) {
    // this.refreshNotes();
  }

  refreshNotes(blocNoteId: number) {
    this.httpClient.get(`/api/notes/${blocNoteId}`).subscribe((notes: any) => {
      this.notesSubject.next(notes);
    });
  }

  getNotes(id: number): Observable<Note[]> {
    return this.notes$.pipe(
      map(notes => notes.filter(note => note.blocNoteId === id))
    );
  }

  getAllNotes(): Observable<Note[]> {
    return this.notes$;
  }

  getNoteById(id: number): Observable<Note | undefined> {
    return this.notes$.pipe(
      map(notes => notes.find(note => note.id === id))
    );
  }

  getIdNumer(): number {
    return this.noteId;
  }

  increaseId(): void {
    this.noteId++;
  }

  addNote(note: Note): void {
    // Envoyer la note au serveur
    this.httpClient.post("/api/notes", note).subscribe(() => {
      this.refreshNotes(note.blocNoteId);
    });
  }

  deleteNote(note: Note): void {
    // Supprimer la note du tableau local et du serveur
    const notes = this.notesSubject.getValue();
    const index = notes.findIndex(n => n.id === note.id);
    if (index !== -1) {
      notes.splice(index, 1);
      this.notesSubject.next(notes);
    }
    // Supprimer la note du serveur
    this.httpClient.delete(`/api/notes/${note.id}`).subscribe(() => {
      this.refreshNotes(note.blocNoteId);
    });
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