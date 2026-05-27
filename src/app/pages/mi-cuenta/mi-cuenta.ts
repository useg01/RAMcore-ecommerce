import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuenta implements OnInit {
  isLogged: boolean = false;
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isLogged = localStorage.getItem('userLogged') === 'true';
    }
  }
}