import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.services'
import { Formation } from '../../models/formation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  classes=[
    {sigle:'CTSAPD',nom:'Compétences du Technicien Supérieur en Analyse de Performance Digitale.'},
    {sigle:'CTSGDE',nom:"Compétences du Technicien Supérieur en Gestion des Données de L'entreprise."},
    {sigle:'CTSDFE',nom:'Compétences du Technicien Supérieur en Développement Front - End.'},
    {sigle:'CTSDBE',nom:'Compétences du Technicien Supérieur en Développement Back - End.'},
    {sigle:'CTSABD',nom:'Compétences du Technicien Supérieur en Administration Bases de Données.'},
  ]

  formations : Formation[]=[]

  constructor(private url:ConfigService) { }

  ngOnInit(): void {
    this.url.getFormation().subscribe((data) =>  {
      console.log('Données :')
      this.formations=data
      console.log(this.formations)
    });
  }

}
