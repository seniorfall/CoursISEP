import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl,Validators} from '@angular/forms'
import { Formation } from 'src/models/formation';
import {ConfigService} from '../../../config/config.services'

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  form=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.min(6)]),
    sigle:new FormControl('',[Validators.required])
  })
  
  constructor(private builder:FormBuilder,private url:ConfigService) { }

  get sigle() { return this.form.get('sigle'); }
  get name() { return this.form.get('name'); }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value.name)
    var formation=new Formation()
    formation.name=''+this.form.value.name
    formation.sigle=''+this.form.value.sigle
    //this.url.saveFormation(formation).subscribe((data)=>{})
  }

}
