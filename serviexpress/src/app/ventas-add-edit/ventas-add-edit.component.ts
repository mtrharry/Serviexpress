import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-ventas-add-edit',
  templateUrl: './ventas-add-edit.component.html',
  styleUrls: ['./ventas-add-edit.component.scss'],
})

export class VentasAddEditComponent  implements OnInit {
  comuna: string[] = [
    'Recoleta',
    'Providencia',
    'Estacion Central',
    'Maipu',
    'Las condes',
    'Independencia',
  ]
  constructor() { }

  ngOnInit() {}

}

