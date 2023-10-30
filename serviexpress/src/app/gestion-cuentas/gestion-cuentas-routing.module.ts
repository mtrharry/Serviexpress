import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCuentasPage } from './gestion-cuentas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCuentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCuentasPageRoutingModule {}
