import { Component, OnInit } from '@angular/core';
import { datosnumero } from 'src/app/interfaces/datos-numero';
import { DatosNumeroService } from 'src/app/services/datos-numero.service';
import { ActivatedRoute } from '@angular/router';
import { areas } from 'src/app/interfaces/areas';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.page.html',
  styleUrls: ['./celular.page.scss'],
})
export class CelularPage implements OnInit {
  celularNum: datosnumero[] = [];
  areasActuales: areas[]=[];
  nombreAreas: areas={id: "",nombre: ""};
  public id: string;
  constructor(private celularService:DatosNumeroService, private route: ActivatedRoute, private areaService:AreasService) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.celularService.getAllDDatosNumero(this.id).subscribe(resp=>{
      this.celularNum = resp;
    });
    this.areaService.getAllAreas().subscribe(resp=>{
      this.areasActuales = resp;
      console.log(this.nombreAreas = this.areasActuales.find(area => area.id == this.id ));
    });
  }

}
