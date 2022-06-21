import { Component, OnInit } from '@angular/core';
import { areas } from 'src/app/interfaces/areas';
import { AreasService } from 'src/app/services/areas.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  areasActuales: areas[]=[];

  constructor(private areaService: AreasService ) { }
  ngOnInit() {
    this.areaService.getAllAreas().subscribe(resp=>{
      console.log(resp);
      this.areasActuales = resp;
    });
  }

}
