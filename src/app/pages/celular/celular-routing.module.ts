import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelularPage } from './celular.page';

const routes: Routes = [
  {
    path: '',
    component: CelularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelularPageRoutingModule {}
