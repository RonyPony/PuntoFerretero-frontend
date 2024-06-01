import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7285/api/Product/Product';
  constructor(
    private http: HttpClient
  ) {

  }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}
