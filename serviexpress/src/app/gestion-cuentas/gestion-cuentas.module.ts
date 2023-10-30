import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GestionCuentasPageRoutingModule } from './gestion-cuentas-routing.module';


import { GestionCuentasPage  } from './gestion-cuentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCuentasPageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [GestionCuentasPage]
})
export class GestionCuentasPageModule {}
