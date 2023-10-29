import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
enum EstadoPedido {
  Pendiente = 'Enviado',
  EnProceso = 'Recepcionado',
  Completado = 'Entregado',
}
interface PedidoItem {
  id: number;
  nombre: string;
  estado: EstadoPedido;
  imagenUrl: string; // Agregamos una propiedad para la URL de la imagen
}
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})

export class PedidosPage implements OnInit {
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
  items: PedidoItem[] = [];

  ngOnInit() {
    this.generateItems(3);
  }
  
  private generateItems(count: number) {
    const startIndex = this.items.length + 1;
    for (let i = startIndex; i < startIndex + count; i++) {
      const estado = i % 3 === 0 ? EstadoPedido.Pendiente : i % 3 === 1 ? EstadoPedido.EnProceso : EstadoPedido.Completado;

      // Define las URL de las imágenes para cada tipo de elemento
      const imageUrls = [
        'URL_del_neumatico',
        'URL_del_tarro_de_aceite',
        'URL_del_refrigerante_de_autos',
      ];

      const item: PedidoItem = {
        id: i,
        nombre: `Pedido ${i}`,
        estado,
        imagenUrl: imageUrls[i % 3], // Asigna la URL de la imagen basada en el índice
      };
      this.items.push(item);
    }
  }

  onIonInfinite(ev: CustomEvent) {
    this.generateItems(3);
    setTimeout(() => {
      (ev.target as HTMLIonInfiniteScrollElement).complete();
    }, 500);
  }
}