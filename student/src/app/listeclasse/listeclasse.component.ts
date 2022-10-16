import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listeclasse',
  templateUrl: './listeclasse.component.html',
  styleUrls: ['./listeclasse.component.css']
})
export class ListeclasseComponent implements OnInit {



  classes=[
    {sigle:'CTSAPD',nom:'Compétences du Technicien Supérieur en Analyse de Performance Digitale.'},
    {sigle:'CTSGDE',nom:"Compétences du Technicien Supérieur en Gestion des Données de L'entreprise."},
    {sigle:'CTSDFE',nom:'Compétences du Technicien Supérieur en Développement Front - End.'},
    {sigle:'CTSDBE',nom:'Compétences du Technicien Supérieur en Développement Back - End.'},
    {sigle:'CTSABD',nom:'Compétences du Technicien Supérieur en Administration Bases de Données.'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
