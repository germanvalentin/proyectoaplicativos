import { Component, OnInit } from '@angular/core';
import { atras } from 'src/app/interfaces/atras';
import { numusuario } from 'src/app/interfaces/numero-de-usuario';
import { proxatencion } from 'src/app/interfaces/proxima-atencion';
import { AtrasService } from 'src/app/services/atras.service';
import { NumeroDeUsuarioService } from 'src/app/services/numero-de-usuario.service';
import { ProximaAtencionService } from 'src/app/services/proxima-atencion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  numUsers: numusuario[] = [];
  proximaAtencion:proxatencion[] = [];
  atrasNum: atras[] = [];

  constructor(private numService: NumeroDeUsuarioService, private proximaService:ProximaAtencionService, private atrasService: AtrasService) { }

  ngOnInit() {
    this.numService.getAllNum().subscribe(resp=>{
      console.log(resp);
      this.numUsers = resp;
    });
    this.proximaService. getAllProximaAtencion().subscribe(resp=>{
      console.log(resp);
      this.proximaAtencion = resp;
    });
    this.atrasService. getAllAtras().subscribe(resp=>{
      console.log(resp);
      this.atrasNum = resp;
    });
  }

}
