import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc-notes',
  standalone: true,
  imports: [],
  templateUrl: './bloc-notes.component.html',
  styleUrl: './bloc-notes.component.css'
})

export class BlocNoteComponent {

  @Input() note!: BlocNote;

  selectNote()
  {
    // console.log("proute");
  }

  constructor() { }
}

interface BlocNote {
  id: number;
  name: string;
  color: string;
}
