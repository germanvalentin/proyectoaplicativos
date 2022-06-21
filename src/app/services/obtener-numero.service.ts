import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { obtenernumeros } from '../interfaces/obtener-numero';
@Injectable({
  providedIn: 'root'
})
export class ObtenerNumeroService {

  constructor(private http: HttpClient){}

    getAllObtenerNumeros(): Observable<obtenernumeros[]> {
      return this.http.get<obtenernumeros[]>('http://api2.solucioneserp.net:8080/obtenernumero/2');
}
}
