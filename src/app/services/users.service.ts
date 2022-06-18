import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient){}

    getAllGasto():Observable<login[]> {
      return this.http.get<login[]>('http://api2.solucioneserp.net:8080/login/demo/demo');
}
}
