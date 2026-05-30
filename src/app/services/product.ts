import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private url = 'https://6a1a31f7bc2f94475491c285.mockapi.io/api/v1/productos'; 

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
