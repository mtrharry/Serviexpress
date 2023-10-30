import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-gestion-cuentas',
  templateUrl: './gestion-cuentas.page.html',
  styleUrls: ['./gestion-cuentas.page.scss'],
})
export class GestionCuentasPage implements OnInit {
  
  constructor(private _dialog: MatDialog) { }

    openAdddEditEmpForm(){
      this._dialog.open(EmpAddEditComponent);
    }
  ngOnInit() {
  }

}
