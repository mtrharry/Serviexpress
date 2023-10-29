import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
  
})

export class LoginPage implements OnInit {
  constructor(private router: Router) { }
  


  ngOnInit() {
  }
  ingresahome() {
    // Navega a la página de inicio (home) cuando se presiona el botón "Ingresar"
    this.router.navigate(['/home']);
  }
  ingresaregistro() {
    
    this.router.navigate(['/registro']);
  }
}
