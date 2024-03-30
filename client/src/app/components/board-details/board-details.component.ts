import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from '../note/note.component';




@Component({
  selector: 'app-board-details',
  standalone: true,
  imports: [NgFor, FormsModule] ,
  templateUrl: './board-details.component.html',
  styleUrl: './board-details.component.css'
})




// OnInit est un hook de cycle de vie d'un composant Angular, ça permet d'exécuter du code à l'initialisation du composant
export class BoardDetailsComponent implements OnInit {
  boardName!: string;
  notes:any = {
    id: 0,
    title: '',
    text: '',
    color: 'blue'
  }




  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardName = params['boardName'];
      // Ici tu peux faire appel à un service pour récupérer les détails du tableau de notes en fonction du nom (boardName) récupéré de l'URL


    });
  }

  // Méthode pour créer une nouvelle note
  createNote(): void {
    // Logique pour créer une nouvelle note ici
    // Par exemple, ajouter la nouvelle note à une liste de notes existante
    this.notes.push(this.notes);
    // Réinitialiser la nouvelle note après sa création
    this.notes = {
      id: this.notes.length + 1,
      title: '',
      text: '',
      color: 'blue'
    };
  }
}
