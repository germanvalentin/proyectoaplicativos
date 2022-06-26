import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumeroDeUsuarioService {

  constructor(private http: HttpClient){}

  getAllNum() {
    return this.http.get<any>('http://api2.solucioneserp.net:8080/numerosdeusuario/1');
  }
}
