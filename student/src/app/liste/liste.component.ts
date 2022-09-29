import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  customers = [{nom: 'Ebony',prenom :'Abdul'}, {nom: 'Chiho', prenom : 'Lamine'},{nom: 'Chiho', prenom : 'Aicha'},{nom: 'Ebony',prenom :'Mareme'}];

  constructor() { }

  ngOnInit(): void {
  }

}
