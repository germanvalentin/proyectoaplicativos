import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { numactual } from '../interfaces/numeros-actuales';
@Injectable({
  providedIn: 'root'
})
export class NumerosActualesService {

  constructor(private http: HttpClient){}

    getAllActual(): Observable<numactual[]> {
      return this.http.get<numactual[]>('http://api2.solucioneserp.net:8080/numeros_actuales');
  }
}
