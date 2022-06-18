import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { proxatencion } from '../interfaces/proxima-atencion';
@Injectable({
  providedIn: 'root'
})
export class ProximaAtencionService {

  constructor(private http: HttpClient){}

    getAllGasto():Observable<proxatencion[]> {
      return this.http.get<proxatencion[]>('https://api2.solucioneserp.net:8080/proximaatencion/3/1');
}
}
