import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router) {}
  ingresahome() {
    
    this.router.navigate(['/home']);
  }
  ingresaservicio() {
    
    this.router.navigate(['/servicios']);
  }
  ingresaperfil() {
    
    this.router.navigate(['/perfil']);
  }
  ingresaproductos() {
    
    this.router.navigate(['/productos']);
  }
  ingresapedidos() {
    
    this.router.navigate(['/pedidos']);
  }
  nombre: string = 'Juan Pérez';
  rut: string = '12.345.678-9';
  patente: string = 'AB-1234';
  direccion: string = 'Calle Principal #123';
  modelo: string = 'Bugatti Voiture Noire';
  ngOnInit() {
  }

}
