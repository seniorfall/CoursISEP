import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  pages: number = 1;

  isbool=false

  valeurclasse='table-dark'

  customers = [{nom: 'Ebony',prenom :'Abdul',sexe:true},
   {nom: 'Chiho', prenom : 'Lamine',sexe:true},
   {nom: 'Chiho', prenom : 'Aicha',sexe:false},
   {nom: 'Ebony',prenom :'Mareme',sexe:false},
   {nom: 'Chiho', prenom : 'Aicha',sexe:false},
   {nom: 'Chiha', prenom : 'Aicha',sexe:false},
   {nom: 'Chihi', prenom : 'Aicha',sexe:false},
   {nom: 'Chihe', prenom : 'Aicha',sexe:false},
   {nom: 'Chihy', prenom : 'Aicha',sexe:true},
   {nom: 'Chiho', prenom : 'Aicha',sexe:false},
   {nom: 'Ebony',prenom :'Mareme',sexe:false},
   {nom: 'Ebony',prenom :'Mareme',sexe:false},
   {nom: 'Ebony',prenom :'Mareme',sexe:false},
   {nom: 'Ebony',prenom :'Mareme',sexe:false}];

  constructor() { }

  ngOnInit(): void {
  }

}
