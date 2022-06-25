import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { areas } from '../interfaces/areas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private http: HttpClient){}

    getAllAreas(): Observable<areas[]> {
      return this.http.get<areas[]>(' http://api2.solucioneserp.net:8080/areas');
  }
}
