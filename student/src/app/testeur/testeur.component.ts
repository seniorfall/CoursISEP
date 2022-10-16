import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-testeur',
  templateUrl: './testeur.component.html',
  styleUrls: ['./testeur.component.css']
})
export class TesteurComponent implements OnInit {

  classForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.classForm.value);
  }

  updateProfile() {
    this.classForm.patchValue({
      prenom: 'Nancy'
    });
  }

}
