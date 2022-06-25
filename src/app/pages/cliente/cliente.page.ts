import { Component, OnInit } from '@angular/core';
import { areas } from 'src/app/interfaces/areas';
import { obtenernumeros } from 'src/app/interfaces/obtener-numero';
import { AreasService } from 'src/app/services/areas.service';
import { ObtenerNumeroService } from 'src/app/services/obtener-numero.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  areasActuales: areas[]=[];
  obtenerNumeros: obtenernumeros[] = []; 

  constructor(private areaService: AreasService , private obtenernumero: ObtenerNumeroService ) { }
  ngOnInit() {
    this.areaService.getAllAreas().subscribe(resp=>{
      console.log(resp);
      this.areasActuales = resp;
    });
  }
  areaObtener(id: string){
    this.obtenernumero.getAllObtenerNumeros(id).subscribe(resul=>{
      this.obtenerNumeros = resul;
      console.log(resul);
    })
  }
}
