import { Component, OnInit } from '@angular/core';
import { datosnumero } from 'src/app/interfaces/datos-numero';
import { DatosNumeroService } from 'src/app/services/datos-numero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-celular',
  templateUrl: './celular.page.html',
  styleUrls: ['./celular.page.scss'],
})
export class CelularPage implements OnInit {
  celularNum: datosnumero[] = [];
  public id: string;
  constructor(private celularService:DatosNumeroService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.celularService.getAllDDatosNumero(this.id).subscribe(resp=>{
      this.celularNum = resp;
      console.log(this.celularNum)
    });
  }

}
