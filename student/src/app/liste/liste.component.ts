import { Component, OnInit } from '@angular/core';
import {Classe} from '../../models/classe';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  test: any;
  show = true;
  etudiants = [Classe];
  customers = [{nom: 'Ebony',prenom :'Abdul',sexe:true}, {nom: 'Chiho', prenom : 'Lamine',sexe:true},{nom: 'Chiho', prenom : 'Aicha',sexe:false},{nom: 'Ebony',prenom :'Mareme',sexe:false}];
  classes=[
    {sigle:'CTSAPD',nom:'Compétences du Technicien Supérieur en Analyse de Performance Digitale.'},
    {sigle:'CTSGDE',nom:"Compétences du Technicien Supérieur en Gestion des Données de L'entreprise."},
    {sigle:'CTSDFE',nom:'Compétences du Technicien Supérieur en Développement Front - End.'},
    {sigle:'CTSDBE',nom:'Compétences du Technicien Supérieur en Développement Back - End.'},
    {sigle:'CTSABD',nom:'Compétences du Technicien Supérieur en Administration Bases de Données.'},
  ]
  constructor() { }

  ngOnInit(): void {
     //this.test=new Classe("CODE1","Promo",1,3);
     this.etudiants.push(this.test);
  }

}
