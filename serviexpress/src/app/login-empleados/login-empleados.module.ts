import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmpleadosPageRoutingModule } from './login-empleados-routing.module';

import { LoginEmpleadosPage } from './login-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmpleadosPageRoutingModule
  ],
  declarations: [LoginEmpleadosPage]
})
export class LoginEmpleadosPageModule {}
