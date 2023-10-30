import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IonicModule } from '@ionic/angular';

import { GestionVentasPageRoutingModule } from './gestion-ventas-routing.module';

import { GestionVentasPage } from './gestion-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionVentasPageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule

  ],
  declarations: [GestionVentasPage]
})
export class GestionVentasPageModule {}