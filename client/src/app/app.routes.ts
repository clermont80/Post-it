import { Routes }                 from '@angular/router';
import { AboutComponent }         from './components/about/about.component';
import { BlocNotePageComponent } from './components/bloc-notes-page/bloc-notes-page.component';





export const routes: Routes = [
  { path: "bloc-note", component: BlocNotePageComponent },
  { path: "about", component: AboutComponent },
  { path: "",   redirectTo: "bloc-note", pathMatch: "full" },
  { path: "**", redirectTo: "bloc-note" }
];
