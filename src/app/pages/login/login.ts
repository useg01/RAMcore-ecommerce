import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  user = '';
  password = '';
  errorMessage = ''; 
  
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  onLogin() {
  
    if (!this.user || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    if (this.user === 'admin@ramcore.com' && this.password === '123456') {
      this.errorMessage = '';
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('userLogged', 'true');
      }
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
    }
  }
}