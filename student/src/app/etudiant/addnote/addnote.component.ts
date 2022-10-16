import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormArray,FormBuilder } from '@angular/forms';
import {Note} from '../../../models/note'

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  note:FormGroup;

  name = new FormControl('');

  constructor() { 
    this.note=new FormGroup(new Note);
  }

  ngOnInit(): void {
    this.observations
  }

  get observations() {
    return this.note.get('observations') as FormArray;
  }

  addAlias() {
    this.observations.push(new FormControl(''));
  }

  valider(){

  }


  onSubmit(){
    alert("Test")
  }

}
