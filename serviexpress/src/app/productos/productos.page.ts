import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  productos: Producto[] = [
    { nombre: 'Neumático', precio: 100, cantidad: 0 },
    { nombre: 'Aceite de Motor', precio: 20, cantidad: 0 },
    { nombre: 'Filtro de Aire', precio: 15, cantidad: 0 },
  ];

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

  onAdd(producto: Producto) {
    producto.cantidad++;
  }

  onRemove(producto: Producto) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    }
  }
  ngOnInit() { }

}
