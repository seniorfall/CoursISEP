import { Component, OnInit } from '@angular/core';
import {EtudiantVM} from '../../../models/add/etudiantVM';
import { FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent implements OnInit {

  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};

  etudiant=this.fb.group({
    code:['',Validators.required, Validators.min(5)],
    nom:['',Validators.required],
    prenom:['',Validators.required],
    sexe:[''],
    dateNaissance:['']
  })

  test="d-grid gap-2 d-md-flex justify-content-md-end"
  tes=true
  

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    
  }

  ngOnChanges():void{
    alert("Test")
  }

  onSubmit(){

  }


}
