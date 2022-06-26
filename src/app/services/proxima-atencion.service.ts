import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProximaAtencionService {

  constructor(private http: HttpClient){}

    getAllProximaAtencion(id: string) {
      return this.http.get<any>('http://api2.solucioneserp.net:8080/proximaatencion/1/'+ id);
}
}
