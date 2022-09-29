import { Component, OnInit } from '@angular/core';
import {Classe} from '../../models/classe';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  test: any;
  etudiants = [Classe];
  customers = [{nom: 'Ebony',prenom :'Abdul'}, {nom: 'Chiho', prenom : 'Lamine'},{nom: 'Chiho', prenom : 'Aicha'},{nom: 'Ebony',prenom :'Mareme'}];
  constructor() { }

  ngOnInit(): void {
     this.test=new Classe("CODE1","Promo",1,3);
     this.etudiants.push(this.test);
  }

}
