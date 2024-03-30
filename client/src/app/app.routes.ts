import { Routes } from '@angular/router';
import { BoardDetailsComponent } from './components/board-details/board-details.component';
import { BoardsComponent } from './components/boards/boards.component';





export const routes: Routes =
  [
    { path: 'details/:boardName', component: BoardDetailsComponent },
    { path: 'boards', component: BoardsComponent },
    { path: '**', redirectTo: '/boards', pathMatch: 'full' }
  ];
