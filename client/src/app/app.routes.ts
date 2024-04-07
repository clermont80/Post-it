import { Routes }                 from '@angular/router';
import { AboutComponent }         from './components/about/about.component';
import { BlocNotePageComponent } from './components/bloc-notes-page/bloc-notes-page.component';
import { BlocNotesDetailComponent } from './components/bloc-notes-detail/bloc-notes-detail.component';





export const routes: Routes = [
  { path: "bloc-note", component: BlocNotePageComponent },
  { path: "bloc-note/:id", component: BlocNotesDetailComponent },
  { path: "about", component: AboutComponent },
  { path: "",   redirectTo: "bloc-note", pathMatch: "full" },
  { path: "**", redirectTo: "bloc-note" }
];
