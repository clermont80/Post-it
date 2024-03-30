import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input("note")
  note: any = {
    id: 0,
    title: 'Test',
    content: 'Test content',
    color: 'RED'
  }

  constructor() { }
}
