import { Component, OnInit } from '@angular/core';
import {Formation} from '../../models/formation'

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation:Formation

  constructor() { 
    this.formation=new Formation()
  }

  ngOnInit(): void {
  }

}
