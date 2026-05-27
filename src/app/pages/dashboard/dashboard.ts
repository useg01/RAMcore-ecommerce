import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  userName: string = 'Administrador RAMcore';
  userRole: string = 'Super Usuario';
  lastLogin: Date = new Date();

  totalVentas: number = 15400;
  productosActivos: number = 24;

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      
      localStorage.removeItem('userLogged');
    }
    this.router.navigate(['/home']);
  }
}