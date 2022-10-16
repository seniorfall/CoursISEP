import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  classe = this.fb.group({
    code: ['',Validators.required,Validators.min(10)],
    nom: ['',Validators.required],
    effectif: ['',Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
