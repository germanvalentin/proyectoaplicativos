import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { atras } from '../interfaces/atras';
@Injectable({
  providedIn: 'root'
})
export class AtrasService {

  constructor(private http: HttpClient){}

    getAllGasto():Observable<atras[]> {
      return this.http.get<atras[]>('https://api2.solucioneserp.net:8080/atras/1');
}
}
