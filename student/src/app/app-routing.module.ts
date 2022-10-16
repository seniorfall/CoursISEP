import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeComponent} from './liste/liste.component';
import {ListeclasseComponent} from './listeclasse/listeclasse.component';
import {HomeComponent} from './home/home.component';
import {AddetudiantComponent} from './etudiant/addetudiant/addetudiant.component';
import { EtudiantComponent}   from './etudiant/etudiant.component'

import {AddnoteComponent} from './etudiant/addnote/addnote.component'
import {DetailsComponent} from './home/details/details.component'
import {TestComponent} from './test/test.component'
import {FormationComponent} from './formation/formation.component'
import {AddFormationComponent} from './home/add-formation/add-formation.component'
import {AddClasseComponent} from './classe/add-classe/add-classe.component'

const routes: Routes = [
  { path:'home', title:'home', component:HomeComponent},
  { path:'details/:sigle', component:DetailsComponent},
  { path:'',redirectTo:'/home', pathMatch:'full'},
  { path:'etudiant', component:EtudiantComponent},
  {path:"addEtudiant",component:AddetudiantComponent},
  { path:'liste', component:ListeclasseComponent},
  {path:"addnote",component:AddnoteComponent},
  {path:"lister",component:ListeComponent},
  {path:"test",component:TestComponent},
  {path:"formation",component:FormationComponent},
  {path:"addFormation", component:AddFormationComponent},
  {path:"addClasses", component:AddClasseComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
