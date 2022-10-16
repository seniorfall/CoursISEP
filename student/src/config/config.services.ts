import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {Formation} from '../models/formation'

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

  getFormation() {
    return this.http.get<Formation[]>('http://localhost:8000/api/formations');
  }

  saveFormation(formation:Formation ) {
    return this.http.post<Formation[]>('http://localhost:8000/api/formations',formation);
  }

}