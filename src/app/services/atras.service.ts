import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { atras } from '../interfaces/atras';
@Injectable({
  providedIn: 'root'
})
export class AtrasService {

  constructor(private http: HttpClient){}

    getAllAtras(): Observable<atras[]> {
      return this.http.get<atras[]>('http://api2.solucioneserp.net:8080/atras/1');
}
}
