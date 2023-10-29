import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

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
  ingresareserva() {
    
    this.router.navigate(['/reservahora']);
  }
  ngOnInit() {
  }

}
