import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModifyNoteModalService {
  private openModalSubject = new BehaviorSubject<boolean>(false);
  openModal$ = this.openModalSubject.asObservable();

  private currentNoteSubject = new BehaviorSubject<Note | null>(null);
  currentNote$ = this.currentNoteSubject.asObservable();

  constructor() {}

  openModal(note: Note | undefined): void 
  {
    if (note) 
    {
      console.log(note);
      this.currentNoteSubject.next(note);
    }
    this.openModalSubject.next(true);
  }

  closeModal(): void 
  {
    this.openModalSubject.next(false);
  }
}

interface Note {
  id: number;
  blocNoteId: number;
  title: string;
  content: string;
  color: string;
}
