import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEmpleadosPage } from './login-empleados.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEmpleadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEmpleadosPageRoutingModule {}
