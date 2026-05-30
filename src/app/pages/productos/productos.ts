import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  private http = inject(HttpClient);

  listaProductos: any[] = [];         
  productosFiltrados: any[] = [];     

  textoBuscar: string = '';
  categoriaSeleccionada: string = '';

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.http.get<any[]>('https://6a1a31f7bc2f94475491c285.mockapi.io/api/v1/productos').subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.productosFiltrados = data; 
      },
      error: (err) => console.error('Error al traer productos:', err)
    });
  }

  filtrar() {
    this.productosFiltrados = this.listaProductos.filter(producto => {
      
      const coincideTexto = producto.nombre.toLowerCase().includes(this.textoBuscar.toLowerCase());
      
      const coincideCategoria = this.categoriaSeleccionada === '' || producto.categoria === this.categoriaSeleccionada;
      
      return coincideTexto && coincideCategoria;
    });
  }
}
