import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuEmpleadosPageRoutingModule } from './menu-empleados-routing.module';

import { MenuEmpleadosPage } from './menu-empleados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuEmpleadosPageRoutingModule
  ],
  declarations: [MenuEmpleadosPage]
})
export class MenuEmpleadosPageModule {}
