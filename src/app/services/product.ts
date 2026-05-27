import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/productos'; 

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}