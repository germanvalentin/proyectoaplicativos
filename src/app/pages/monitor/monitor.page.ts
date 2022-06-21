import { Component, OnInit } from '@angular/core';
import { numactual } from 'src/app/interfaces/numeros-actuales';
import { NumerosActualesService } from 'src/app/services/numeros-actuales.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit {
  numActuales: numactual[]=[];
  constructor(private numActual: NumerosActualesService ) { }
  ngOnInit(): void {
    this.numActual.getAllActual().subscribe(resp=>{
      console.log(resp);
      this.numActuales = resp;
    });
  }

}
