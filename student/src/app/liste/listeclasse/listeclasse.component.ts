import { Component, OnInit } from '@angular/core';
import {Classe} from '../../../models/classe'

@Component({
  selector: 'app-listeclasse',
  templateUrl: './listeclasse.component.html',
  styleUrls: ['./listeclasse.component.css']
})
export class ListeclasseComponent implements OnInit {

  //classe=new Classe('CL001','Nom classe',2022,20)

  constructor() { }

  ngOnInit(): void {
  }

}
