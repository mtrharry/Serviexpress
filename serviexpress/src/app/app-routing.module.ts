import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reservahora',
    loadChildren: () => import('./reservahora/reservahora.module').then(m => m.ReservahoraPageModule) 
  },
  {
    path: 'login-empleados',
      loadChildren: () => import('./login-empleados/login-empleados.module').then( m => m.LoginEmpleadosPageModule)
  },
  {
    path: 'menu-empleados',
    loadChildren: () => import('./menu-empleados/menu-empleados.module').then( m => m.MenuEmpleadosPageModule)
  },
  {
    path: 'menu-empleados',
    loadChildren: () => import('./menu-empleados/menu-empleados.module').then( m => m.MenuEmpleadosPageModule)
  },
  {
    path: 'gestion-ventas',
    loadChildren: () => import('./gestion-ventas/gestion-ventas.module').then( m => m.GestionVentasPageModule)
  },
  {
    path: 'gestion-cuentas',
    loadChildren: () => import('./gestion-cuentas/gestion-cuentas.module').then( m => m.GestionCuentasPageModule)
  },
  {
    path: 'generar',
    loadChildren: () => import('./generar/generar.module').then( m => m.GenerarPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
