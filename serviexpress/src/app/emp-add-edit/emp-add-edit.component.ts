import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent  implements OnInit {
  comuna: string[] = [
    'Recoleta',
    'Providencia',
    'Estacion Central',
    'Maipu',
    'Las condes',
    'Independencia',
  ]
  

  ngOnInit() {}

}
