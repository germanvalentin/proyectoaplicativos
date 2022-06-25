import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelularPageRoutingModule } from './celular-routing.module';

import { CelularPage } from './celular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelularPageRoutingModule
  ],
  declarations: [CelularPage]
})
export class CelularPageModule {}
