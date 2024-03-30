import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NgFor],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.css'
})


export class BoardsComponent
{

  boards: string[] = [];

  constructor(private router: Router) { }

  addBoard(boardName: string) {
    this.boards.push(boardName);
  }

  navigateToBoardDetails(boardName: string)
  {
    this.router.navigate(['/details', boardName]);
  }
}
