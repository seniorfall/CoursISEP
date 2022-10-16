import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListeclasseComponent } from './liste/listeclasse/listeclasse.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddetudiantComponent } from './etudiant/addetudiant/addetudiant.component';
import { AddnoteComponent } from './etudiant/addnote/addnote.component';
import { ClasseComponent } from './classe/classe.component';
import { TestComponent } from './test/test.component';
import { DetailsComponent } from './home/details/details.component';
import { RecupvaleurDirective } from './recupvaleur.directive';
import { TesteurComponent } from './testeur/testeur.component';
import { FormationComponent } from './formation/formation.component'
import {ConfigService} from '../config/config.services';
import { AddFormationComponent } from './home/add-formation/add-formation.component';
import { AddClasseComponent } from './classe/add-classe/add-classe.component'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListeComponent,
    ListeclasseComponent,
    EtudiantComponent,
    AddetudiantComponent,
    AddnoteComponent,
    ClasseComponent,
    TestComponent,
    DetailsComponent,
    RecupvaleurDirective,
    TesteurComponent,
    FormationComponent,
    AddFormationComponent,
    AddClasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
