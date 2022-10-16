import { Component, OnInit } from '@angular/core';
import {Classe} from '../../../models/classe'

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent implements OnInit {

  classe=new Classe()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.classe)
  }

}
