import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  classes=[
    {sigle:'CTSAPD',nom:'Compétences du Technicien Supérieur en Analyse de Performance Digitale.'},
    {sigle:'CTSGDE',nom:"Compétences du Technicien Supérieur en Gestion des Données de L'entreprise."},
    {sigle:'CTSDFE',nom:'Compétences du Technicien Supérieur en Développement Front - End.'},
    {sigle:'CTSDBE',nom:'Compétences du Technicien Supérieur en Développement Back - End.'},
    {sigle:'CTSABD',nom:'Compétences du Technicien Supérieur en Administration Bases de Données.'},
  ]

  color="red"

  constructor() { }

  ngOnInit(): void {
  }

}
