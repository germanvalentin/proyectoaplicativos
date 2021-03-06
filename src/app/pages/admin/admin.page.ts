import { Component, OnInit } from '@angular/core';
import { atras } from 'src/app/interfaces/atras';
import { Area, numus } from 'src/app/interfaces/numero-de-usuario';
import { proxatencion } from 'src/app/interfaces/proxima-atencion';
import { AtrasService } from 'src/app/services/atras.service';
import { NumeroDeUsuarioService } from 'src/app/services/numero-de-usuario.service';
import { ProximaAtencionService } from 'src/app/services/proxima-atencion.service';
import { AreasService } from 'src/app/services/areas.service';
import { areas } from 'src/app/interfaces/areas';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  numUsers: numus ={
  usuarioid: "", 
  areas: []
  };
  numUserfalse: numus ={
    usuarioid: "", 
    areas: []
    };
  proximaAtencion:proxatencion[] = [];
  atrasNum: atras[] = [];
  atendiendo: Area = {
    numero: 0,
    atendiendo: true,
    areaid: 1
  }
  areasActuales: areas[]=[];

  
  constructor(private numService: NumeroDeUsuarioService, private proximaService:ProximaAtencionService, private atrasService: AtrasService, private areaService:AreasService) { }

  ngOnInit() {
    this.numService.getAllNum().subscribe(resp=>{
      console.log(resp);
      this.numUsers = resp; 
      console.log(this.atendiendo = this.numUsers.areas.find(area => area.atendiendo));
      this.numUserfalse.usuarioid=this.numUsers.usuarioid;
      this.numUserfalse.areas=this.numUsers.areas.filter(area=>!area.atendiendo);
      console.log(this.numUserfalse.areas);
    });
    this.areaService.getAllAreas().subscribe(resp=>{
      this.areasActuales = resp;
    
    });
  
  }
  nombreAreas(areaId:number){
  return this.areasActuales.find(area => Number(area.id) == areaId)?.nombre;
}
change(numchange:number){
  let aux = this.numUserfalse.areas.findIndex(areas => areas.numero==numchange);
  this.atendiendo = this.numUserfalse.areas[aux];
  this.numUserfalse.areas.splice(aux,1);
  this.proximaService. getAllProximaAtencion(String(this.atendiendo.areaid)).subscribe(resp=>{
    console.log(resp);
    this.numUserfalse.areas.unshift({numero:resp.numero,atendiendo:false,areaid:resp.areaid});
  });
  console.log(this.numUserfalse)
}
back(numchange:number){
  console.log(numchange);
  let aux = this.numUserfalse.areas.findIndex(areas => areas.areaid==numchange);
  this.atrasService. getAllAtras(String(numchange)).subscribe(resp=>{
    this.numUserfalse.areas.splice(aux,1,{numero:resp.numero,atendiendo:false,areaid:resp.areaid})
    
  });
}
}

