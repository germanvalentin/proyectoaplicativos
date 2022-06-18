import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { numactual } from '../interfaces/numeros-actuales';
@Injectable({
  providedIn: 'root'
})
export class NumerosActualesService {

  constructor(private http: HttpClient){}

    getAllGasto():Observable<numactual[]> {
      return this.http.get<numactual[]>('https://api2.solucioneserp.net:8080/numeros_actuales');
}
}
