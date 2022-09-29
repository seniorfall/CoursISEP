import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeComponent} from './liste/liste.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'liste', component:ListeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
