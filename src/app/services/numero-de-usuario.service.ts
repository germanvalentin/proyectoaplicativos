import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { numusuario } from '../interfaces/numero-de-usuario';

@Injectable({
  providedIn: 'root'
})
export class NumeroDeUsuarioService {

  constructor(private http: HttpClient){}

  getAllNum(): Observable<numusuario[]> {
    return this.http.get<numusuario[]>('http://api2.solucioneserp.net:8080/numerosdeusuario/3');
  }
}
