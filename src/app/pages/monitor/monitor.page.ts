import { Component, OnInit } from '@angular/core';
import { datosnumero } from 'src/app/interfaces/datos-numero';
import { numactual } from 'src/app/interfaces/numeros-actuales';
import { DatosNumeroService } from 'src/app/services/datos-numero.service';
import { NumerosActualesService } from 'src/app/services/numeros-actuales.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {
  numActuales: numactual[]=[];

  constructor(private numActual: NumerosActualesService) { }
  ngOnInit(): void {
    setInterval(()=>{
      this.numActual.getAllActual().subscribe(resp=>{
        console.log(resp);
        this.numActuales = resp;
      });
    },1000)
  }
}
