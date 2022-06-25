import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient){}

    getAllLogin(){
      return this.http.get<any>('http://api2.solucioneserp.net:8080/login/demo/demo');
  }
}
