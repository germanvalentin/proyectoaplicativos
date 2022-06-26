import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class DatosNumeroService {

    constructor(private http: HttpClient){}

    getAllDDatosNumero(id: string){
        return this.http.get<any>('http://api2.solucioneserp.net:8080/datosnumero/'+ id +'/65');
    }
}
