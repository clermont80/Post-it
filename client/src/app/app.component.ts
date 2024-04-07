import { Component }        from '@angular/core';
import { RouterOutlet }     from '@angular/router';
import { NavbarComponent }  from './components/navbar/navbar.component';
import { BlocNotePageComponent } from './components/bloc-notes-page/bloc-notes-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BlocNotePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
